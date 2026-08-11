/**
 * Flattens the Next.js standalone output before the OpenNext Cloudflare bundler runs.
 *
 * WHY: `next.config.js` sets `experimental.outputFileTracingRoot` to the parent
 * directory (required by the Abacus hosting build). As a consequence Next.js emits
 * the standalone server into `.next/standalone/<appDir>/...` instead of
 * `.next/standalone/...`, and @opennextjs/cloudflare fails with:
 *   ENOENT .next/standalone/.next/server/pages-manifest.json
 *
 * This script detects that nested layout and moves the contents one level up.
 * It is a no-op when the standalone output is already flat, so it is safe to run
 * on every build and in every environment.
 */
import fs from 'node:fs';
import path from 'node:path';

const distDir = process.env.NEXT_DIST_DIR || '.next';
const standaloneDir = path.resolve(process.cwd(), distDir, 'standalone');

if (!fs.existsSync(standaloneDir)) {
  console.error(`[flatten-standalone] ${standaloneDir} not found - run "next build" first.`);
  process.exit(1);
}

if (fs.existsSync(path.join(standaloneDir, distDir, 'server'))) {
  console.log('[flatten-standalone] Standalone output is already flat.');
  normalizeRequiredServerFiles();
  process.exit(0);
}

const nested = fs
  .readdirSync(standaloneDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => path.join(standaloneDir, entry.name))
  .find((dir) => fs.existsSync(path.join(dir, distDir, 'server')));

if (!nested) {
  console.error('[flatten-standalone] Could not locate the nested standalone app directory.');
  process.exit(1);
}

console.log(`[flatten-standalone] Flattening ${path.relative(process.cwd(), nested)} -> ${path.relative(process.cwd(), standaloneDir)}`);

for (const entry of fs.readdirSync(nested)) {
  const from = path.join(nested, entry);
  const to = path.join(standaloneDir, entry);

  if (fs.existsSync(to) || fs.lstatSync(from).isSymbolicLink()) {
    // node_modules is hoisted to the standalone root (or is a symlink in dev);
    // keep whichever copy is already there.
    if (fs.existsSync(to)) {
      fs.rmSync(from, { recursive: true, force: true });
      continue;
    }
  }

  fs.renameSync(from, to);
}

fs.rmSync(nested, { recursive: true, force: true });

normalizeRequiredServerFiles();
console.log('[flatten-standalone] Done.');

/**
 * Next.js records the tracing root inside `required-server-files.json`
 * (`relativeAppDir: "<appDir>"`). OpenNext reads that file to resolve the
 * runtime paths of the server manifests, which would produce broken paths such
 * as `/.next/server/middleware-manifest.json` inside the Worker.
 * After flattening, the app IS the root, so reset those fields.
 */
function normalizeRequiredServerFiles() {
  const targets = [
    path.join(standaloneDir, distDir, 'required-server-files.json'),
    path.resolve(process.cwd(), distDir, 'required-server-files.json'),
  ];

  for (const file of targets) {
    if (!fs.existsSync(file)) continue;

    const json = JSON.parse(fs.readFileSync(file, 'utf8'));
    let changed = false;

    if (json.relativeAppDir) {
      json.relativeAppDir = '';
      changed = true;
    }
    if (json.config?.experimental?.outputFileTracingRoot && json.appDir) {
      json.config.experimental.outputFileTracingRoot = json.appDir;
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(file, JSON.stringify(json));
      console.log(`[flatten-standalone] Normalized ${path.relative(process.cwd(), file)}`);
    }
  }
}
