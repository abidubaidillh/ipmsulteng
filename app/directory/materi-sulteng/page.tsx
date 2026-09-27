import type { Metadata } from 'next'
import { FolderOpen } from 'lucide-react'
import UnderConstructionPage from '@/components/UnderConstructionPage'

export const metadata: Metadata = {
  title: 'Materi IPM SulTeng | PW IPM Sulawesi Tengah',
  description:
    'Kumpulan materi, panduan, dan dokumen lokal PW IPM Sulawesi Tengah untuk kader di seluruh wilayah Sulawesi Tengah.',
  keywords: 'materi IPM Sulteng, dokumen PW IPM Sulteng, panduan kader Sulteng',
}

export default function MateriSultengPage() {
  return (
    <UnderConstructionPage
      title="Materi IPM SulTeng"
      eyebrow="Direktori"
      description="Kumpulan materi, panduan, dan dokumen lokal PW IPM Sulawesi Tengah sedang kami himpun untuk kader di seluruh wilayah."
      icon={FolderOpen}
      breadcrumbs={[
        { label: 'Beranda', href: '/' },
        { label: 'Direktori', href: '/directory' },
        { label: 'Materi IPM SulTeng' },
      ]}
    />
  )
}
