import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Newspaper } from 'lucide-react'
import UnderConstructionPage from '@/components/UnderConstructionPage'
import { ARTICLE_IDS, getArticle } from '@/lib/news'

/**
 * Halaman detail berita.
 *
 * Me-realisasi-kan semua id berita sebagai halaman statis sehingga
 * prefetch `next/link` ke `/news/1`, `/news/2`, dst. tidak pernah
 * menghasilkan 404 di console.
 */
export const dynamicParams = false

type NewsDetailPageProps = {
  params: Promise<{ id: string }>
}

/** Prerender seluruh rute berita yang ada (produk statis, tanpa 404). */
export function generateStaticParams() {
  return ARTICLE_IDS.map((id) => ({ id }))
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const article = getArticle(id)

  if (!article) {
    return { title: 'Berita Tidak Ditemukan | PW IPM Sulawesi Tengah' }
  }

  return {
    title: `${article.title} | PW IPM Sulawesi Tengah`,
    description: article.excerpt,
    keywords: [
      'berita IPM',
      'IPM Sulawesi Tengah',
      article.category.toLowerCase(),
      'pelajar Muhammadiyah',
    ],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: [{ url: article.image, alt: article.title }],
    },
  }
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params
  const article = getArticle(id)

  // `dynamicParams = false` sudah menolak id di luar daftar saat build,
  // guard ini menutup jalur render langsung/internal.
  if (!article) {
    notFound()
  }

  return (
    <UnderConstructionPage
      title={article.title}
      eyebrow={article.category}
      description={`Rilis ${article.category.toLowerCase()} oleh ${article.author}, terbit ${article.date} dengan durasi baca sekitar ${article.readTime}. Naskah lengkap sedang kami rangkum dan akan segera tayang di sini.`}
      icon={Newspaper}
      backHref="/news"
      backLabel="Kembali ke Kabar Pelajar Tadulako"
      breadcrumbs={[
        { label: 'Beranda', href: '/' },
        { label: 'Warta IPM', href: '/news' },
        { label: article.title },
      ]}
    />
  )
}
