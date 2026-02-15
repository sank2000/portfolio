import {
  BadgeCheck,
  BarChart3,
  BookOpen,
  CalendarClock,
  Database,
  FileText,
  GraduationCap,
  Handshake,
  LayoutPanelTop,
  MessageCircle,
  Music,
  PenTool,
  ShoppingCart,
  Users,
} from 'lucide-react'

export const projectThumbColors = ['#d2cab1', '#c7d697', '#dec2cf', '#b8d6c9', '#f5d8c7', '#d5cfb9']

const iconPool = [
  PenTool,
  ShoppingCart,
  BarChart3,
  Database,
  Music,
  MessageCircle,
  BookOpen,
  CalendarClock,
  BadgeCheck,
  GraduationCap,
  FileText,
  Users,
  Handshake,
  LayoutPanelTop,
]

function pickPrimaryIcon(project) {
  const projectName = project.name.toLowerCase()
  const haystack = `${project.name} ${project.description} ${project.stack
    .map((s) => (typeof s === 'string' ? s : s.name))
    .join(' ')}`.toLowerCase()

  if (projectName.includes('biller')) return FileText
  if (projectName.includes('aubit')) return GraduationCap
  if (projectName.includes('college mate')) return GraduationCap
  if (projectName.includes('infinite loop club')) return Handshake
  if (projectName.includes('zosime tech')) return Users

  if (haystack.includes('whiteboard') || haystack.includes('canvas') || haystack.includes('sketch')) return PenTool
  if (
    haystack.includes('e-commerce') ||
    haystack.includes('shop') ||
    haystack.includes('payment') ||
    haystack.includes('stripe') ||
    haystack.includes('paypal')
  ) {
    return ShoppingCart
  }
  if (haystack.includes('dashboard') || haystack.includes('analytics') || haystack.includes('habit')) return BarChart3
  if (haystack.includes('database') || haystack.includes('postgres') || haystack.includes('firebase')) return Database
  if (haystack.includes('vinyl') || haystack.includes('music') || haystack.includes('record')) return Music
  if (haystack.includes('chat') || haystack.includes('message') || haystack.includes('blog')) return MessageCircle
  if (haystack.includes('dictionary')) return BookOpen
  if (haystack.includes('scheduler') || haystack.includes('time-table') || haystack.includes('class')) return CalendarClock
  if (haystack.includes('bonafide') || haystack.includes('certificate')) return BadgeCheck
  if (haystack.includes('university') || haystack.includes('college') || haystack.includes('club')) return GraduationCap
  if (haystack.includes('mdx') || haystack.includes('letters')) return FileText

  return LayoutPanelTop
}

export function buildProjectIconAssignments(projects) {
  const usedIcons = new Set()
  const iconsByProjectName = new Map()

  for (const project of projects) {
    const preferred = pickPrimaryIcon(project)
    let selected = preferred
    if (usedIcons.has(preferred)) {
      selected = iconPool.find((icon) => !usedIcons.has(icon)) || preferred
    }
    usedIcons.add(selected)
    iconsByProjectName.set(project.name, selected)
  }

  return iconsByProjectName
}
