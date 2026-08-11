import { defineCloudflareConfig } from '@opennextjs/cloudflare';

/**
 * OpenNext configuration for Cloudflare Workers.
 *
 * The current app is a static marketing landing page, so no incremental cache,
 * tag cache or queue is required. Those can be enabled later:
 *
 *   import kvIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache';
 *   export default defineCloudflareConfig({ incrementalCache: kvIncrementalCache });
 *
 * (that also requires the NEXT_INC_CACHE_KV binding in wrangler.jsonc)
 */
export default defineCloudflareConfig();
