import type { Metadata } from 'next'
import { ShieldCheck } from 'lucide-react'
import UnderConstructionPage from '@/components/UnderConstructionPage'

export const metadata: Metadata = {
  title: 'Profil IPM Sulawesi Tengah | PW IPM Sulawesi Tengah',
  description:
    'Kenali struktur, tim, dan program unggulan PW IPM Sulawesi Tengah beserta dampaknya bagi pergerakan pelajar di Bumi Tadulako.',
  keywords: 'profil IPM Sulteng, PW IPM Sulawesi Tengah, profil PW IPM',
}

export default function SultengProfilePage() {
  return (
    <UnderConstructionPage
      title="Profil IPM Sulawesi Tengah"
      eyebrow="Profil IPM"
      description="Kenali tim regional kami, program-program lokal unggulan, dan dampak nyata yang telah diciptakan Pelajar Tadulako di Bumi Tadulako. Halaman ini sedang kami siapkan secara lengkap."
      icon={ShieldCheck}
      breadcrumbs={[
        { label: 'Beranda', href: '/' },
        { label: 'Profil', href: '/profile' },
        { label: 'Profil IPM Sulteng' },
      ]}
    />
  )
}
