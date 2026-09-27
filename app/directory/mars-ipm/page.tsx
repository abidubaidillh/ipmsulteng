import type { Metadata } from 'next'
import { Compass } from 'lucide-react'
import UnderConstructionPage from '@/components/UnderConstructionPage'

export const metadata: Metadata = {
  title: 'Mars IPM | PW IPM Sulawesi Tengah',
  description:
    'Mars Ikatan Pelajar Muhammadiyah: visi, misi, tujuan, dan values yang menjadi pedoman pergerakan IPM di seluruh Indonesia.',
  keywords: 'Mars IPM, visi misi IPM, tujuan IPM, Ikatan Pelajar Muhammadiyah',
}

export default function MarsIpmPage() {
  return (
    <UnderConstructionPage
      title="Mars IPM"
      eyebrow="Direktori"
      description="Visi, misi, tujuan, dan values yang menjadi pedoman pergerakan Ikatan Pelajar Muhammadiyah akan kami hadirkan lengkap di halaman ini."
      icon={Compass}
      breadcrumbs={[
        { label: 'Beranda', href: '/' },
        { label: 'Direktori', href: '/directory' },
        { label: 'Mars IPM' },
      ]}
    />
  )
}
