import { SITE_CONFIG } from '@/constants'

export type EnquiryType = 'bridal' | 'academy' | 'beauty' | 'general'

export type EnquiryFormData = {
  type: EnquiryType | ''
  typeLabel: string
  name: string
  phone: string
  // Bridal / Beauty fields
  eventDate: string
  eventLocation: string
  // Academy fields
  courseInterest: string
  experienceLevel: string
  preferredStart: string
  // Shared
  message: string
}

export const ENQUIRY_TYPES = [
  {
    id: 'bridal' as EnquiryType,
    label: 'Bridal Experience',
    description: 'Makeup, hair & saree draping',
  },
  {
    id: 'beauty' as EnquiryType,
    label: 'Beauty Services',
    description: 'Hair, skin, nails & care',
  },
  {
    id: 'academy' as EnquiryType,
    label: 'Editorial & Events',
    description: 'Shoots, productions & creative work',
  },
  {
    id: 'general' as EnquiryType,
    label: 'General Enquiry',
    description: 'Something else entirely',
  },
] as const

export const ACADEMY_COURSES = [
  'Editorial shoot',
  'Commercial / production',
  'Fashion event',
  'Creative project',
  'Not sure yet',
] as const

export const EXPERIENCE_LEVELS = [
  'Complete beginner',
  'Some self-taught experience',
  'Working makeup artist',
  'Professionally trained',
] as const

export function buildWhatsAppEnquiryUrl(data: EnquiryFormData): string {
  const lines = [
    `Hello ${SITE_CONFIG.legalName},`,
    '',
    `Enquiry type: ${data.typeLabel}`,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
  ]

  if (data.type === 'academy') {
    if (data.courseInterest) lines.push(`Course interest: ${data.courseInterest}`)
    if (data.experienceLevel) lines.push(`Experience level: ${data.experienceLevel}`)
    if (data.preferredStart.trim()) lines.push(`Preferred start: ${data.preferredStart.trim()}`)
  } else {
    if (data.eventDate.trim()) lines.push(`Event / preferred date: ${data.eventDate.trim()}`)
    if (data.eventLocation.trim()) lines.push(`Location: ${data.eventLocation.trim()}`)
  }

  if (data.message.trim()) {
    lines.push('', 'Additional details:', data.message.trim())
  }

  lines.push('', `Sent via ${SITE_CONFIG.website.replace(/^https?:\/\//, '')}`)

  const text = encodeURIComponent(lines.join('\n'))
  return `${SITE_CONFIG.whatsapp}?text=${text}`
}

export function openWhatsAppEnquiry(data: EnquiryFormData) {
  window.open(buildWhatsAppEnquiryUrl(data), '_blank', 'noopener,noreferrer')
}
