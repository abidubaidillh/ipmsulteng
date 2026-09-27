import type { Metadata } from 'next'
import NewsPortal from '@/components/NewsPortal'

export const metadata: Metadata = {
  title: 'Kabar Pelajar Tadulako | PW IPM Sulawesi Tengah',
  description:
    'Portal berita dan kabar terkini PW IPM Sulawesi Tengah: liputan wilayah, opini dan literasi pelajar, pengumuman resmi, serta prestasi kader.',
  keywords:
    'berita IPM, kabar IPM, berita Sulawesi Tengah, pelajar Muhammadiyah, PW IPM Sulteng',
}

type NewsPageProps = {
  searchParams: Promise<{ search?: string | string[] }>
}

export default async function NewsPage({ searchParams }: NewsPageProps) {
  // Query pencarian dibaca di server agar seluruh konten artikel ikut
  // ter-render pada HTML awal (SEO & tanpa flash konten kosong).
  const params = await searchParams
  const rawSearch = params?.search
  const initialQuery = Array.isArray(rawSearch)
    ? (rawSearch[0] ?? '')
    : (rawSearch ?? '')

  return <NewsPortal initialQuery={initialQuery} />
}
