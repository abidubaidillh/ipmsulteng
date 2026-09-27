import type { Metadata } from 'next'
import { FileText } from 'lucide-react'
import UnderConstructionPage from '@/components/UnderConstructionPage'

export const metadata: Metadata = {
  title: 'Materi IPM | PW IPM Sulawesi Tengah',
  description:
    'Kumpulan materi panduan, modul, dan referensi belajar kader IPM untuk seluruh Indonesia.',
  keywords: 'materi IPM, modul IPM, panduan kader IPM, PW IPM Sulawesi Tengah',
}

export default function MateriIpmPage() {
  return (
    <UnderConstructionPage
      title="Materi IPM"
      eyebrow="Direktori"
      description="Kumpulan materi panduan, modul, dan referensi belajar kader IPM sedang kami himpun dan rapikan agar mudah diakses."
      icon={FileText}
      breadcrumbs={[
        { label: 'Beranda', href: '/' },
        { label: 'Direktori', href: '/directory' },
        { label: 'Materi IPM' },
      ]}
    />
  )
}
