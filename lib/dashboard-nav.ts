import {
  LayoutDashboard,
  Brain,
  Search,
  MessageCircleQuestion,
  Target,
  Calendar,
  Wallet,
  Settings,
  type LucideIcon,
} from 'lucide-react'

export interface NavItem {
  label: string
  href: string
  icon: LucideIcon
}

export const dashboardNav: NavItem[] = [
  { label: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Brand Intelligence', href: '/dashboard/brand-intelligence', icon: Brain },
  { label: 'AI Research', href: '/dashboard/ai-research', icon: Search },
  { label: 'Audience Questions', href: '/dashboard/audience-questions', icon: MessageCircleQuestion },
  { label: 'Content Strategy', href: '/dashboard/content-strategy', icon: Target },
  { label: 'Content Calendar', href: '/dashboard/content-calendar', icon: Calendar },
  { label: 'Credits', href: '/dashboard/credits', icon: Wallet },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
]