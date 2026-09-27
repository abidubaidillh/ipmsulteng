import type { Metadata } from 'next'
import { Settings } from 'lucide-react'
import UnderConstructionPage from '@/components/UnderConstructionPage'

export const metadata: Metadata = {
  title: 'Administrasi | PW IPM Sulawesi Tengah',
  description:
    'Portal administrasi PW IPM Sulawesi Tengah untuk pengelolaan data kader, keanggotaan, dan dokumen organisasi.',
  keywords: 'administrasi IPM, data kader IPM, keanggotaan IPM, PW IPM Sulawesi Tengah',
}

export default function AdministrationPage() {
  return (
    <UnderConstructionPage
      title="Administrasi"
      eyebrow="Administrasi"
      description="Portal pengelolaan data kader, keanggotaan, dan dokumen organisasi sedang disiapkan agar seluruh struktur bisa lebih tertata."
      icon={Settings}
      breadcrumbs={[
        { label: 'Beranda', href: '/' },
        { label: 'Administrasi' },
      ]}
    />
  )
}
