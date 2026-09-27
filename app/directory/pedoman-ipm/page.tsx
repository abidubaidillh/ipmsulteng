import type { Metadata } from 'next'
import { BookOpen } from 'lucide-react'
import UnderConstructionPage from '@/components/UnderConstructionPage'

export const metadata: Metadata = {
  title: 'Pedoman IPM | PW IPM Sulawesi Tengah',
  description:
    'Pedoman Ikatan Pelajar Muhammadiyah: landasan hukum, adtartib, dan prinsip penyelenggaraan organisasi yang berlaku bagi seluruh kader IPM.',
  keywords: 'pedoman IPM, adtartib IPM, landasan hukum IPM, Ikatan Pelajar Muhammadiyah',
}

export default function PedomanIpmPage() {
  return (
    <UnderConstructionPage
      title="Pedoman IPM"
      eyebrow="Direktori"
      description="Landasan hukum, adtartib, dan prinsip penyelenggaraan organisasi yang berlaku bagi seluruh kader IPM sedang kami siapkan dalam bentuk yang mudah dibaca."
      icon={BookOpen}
      breadcrumbs={[
        { label: 'Beranda', href: '/' },
        { label: 'Direktori', href: '/directory' },
        { label: 'Pedoman IPM' },
      ]}
    />
  )
}
