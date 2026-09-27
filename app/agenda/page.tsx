import type { Metadata } from 'next'
import { CalendarDays } from 'lucide-react'
import UnderConstructionPage from '@/components/UnderConstructionPage'

export const metadata: Metadata = {
  title: 'Agenda & Informasi | PW IPM Sulawesi Tengah',
  description:
    'Jadwal kegiatan, pengumuman, dan informasi resmi PW IPM Sulawesi Tengah untuk seluruh kader dan pelajar Muhammadiyah.',
  keywords: 'agenda IPM, informasi IPM, jadwal kegiatan IPM, PW IPM Sulawesi Tengah',
}

export default function AgendaPage() {
  return (
    <UnderConstructionPage
      title="Agenda & Informasi"
      eyebrow="Agenda"
      description="Jadwal kegiatan, pengumuman, dan informasi resmi PW IPM Sulawesi Tengah sedang kami susun agar mudah diakses seluruh kader."
      icon={CalendarDays}
      breadcrumbs={[
        { label: 'Beranda', href: '/' },
        { label: 'Agenda & Informasi' },
      ]}
    />
  )
}
