import type { Metadata } from 'next'
import { BookOpen } from 'lucide-react'
import UnderConstructionPage from '@/components/UnderConstructionPage'

export const metadata: Metadata = {
  title: 'Direktori | PW IPM Sulawesi Tengah',
  description:
    'Kumpulan pedoman, mars, dan dokumen resmi Ikatan Pelajar Muhammadiyah yang dapat diakses seluruh kader IPM Sulawesi Tengah.',
  keywords: 'direktori IPM, dokumen IPM, pedoman IPM, mars IPM, PW IPM Sulawesi Tengah',
}

export default function DirectoryPage() {
  return (
    <UnderConstructionPage
      title="Direktori"
      eyebrow="Direktori"
      description="Kumpulan pedoman, mars, dan dokumen resmi Ikatan Pelajar Muhammadiyah sedang kami rapikan agar mudah diakses seluruh kader."
      icon={BookOpen}
      breadcrumbs={[
        { label: 'Beranda', href: '/' },
        { label: 'Direktori' },
      ]}
    />
  )
}
