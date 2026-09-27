import type { Metadata } from 'next'
import { Landmark } from 'lucide-react'
import UnderConstructionPage from '@/components/UnderConstructionPage'

export const metadata: Metadata = {
  title: 'Sejarah IPM | PW IPM Sulawesi Tengah',
  description:
    'Jejak langkah berdirinya dan perkembangan Ikatan Pelajar Muhammadiyah hingga menjadi organisasi pelajar Muhammadiyah di Sulawesi Tengah.',
  keywords: 'sejarah IPM, sejarah Ikatan Pelajar Muhammadiyah, sejarah IPM Sulteng',
}

export default function SejarahPage() {
  return (
    <UnderConstructionPage
      title="Sejarah & Perjalanan"
      eyebrow="Profil IPM"
      description="Narasi lengkap perjalanan Ikatan Pelajar Muhammadiyah dari gagasan awal, masa pendirian, hingga transformasinya menjadi wadah pergerakan pelajar yang inspiratif sedang kami rangkum dari arsip dan kesaksian PARA kader."
      icon={Landmark}
      breadcrumbs={[
        { label: 'Beranda', href: '/' },
        { label: 'Profil', href: '/profile' },
        { label: 'Sejarah IPM' },
      ]}
    />
  )
}
