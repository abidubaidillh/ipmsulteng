'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Newspaper,
  X,
} from 'lucide-react'

/* ------------------------------------------------------------------
   DESIGN SYSTEM — Neo-Brutalist Magenta
   Referensi: app/page.tsx & app/profile/page.tsx
------------------------------------------------------------------- */

/** Outline: seluruh kartu, input, dan badge. */
const BORDER = 'border-2 border-[#7A2D61]'

/** Radius: wajib rounded-none di seluruh elemen. */
const RADIUS = 'rounded-none'

/** Shadow default (kartu/kontainer) + hover + active. */
const SHADOW_CARD = 'shadow-[4px_4px_0px_0px_#7A2D61]'
const SHADOW_HOVER =
  'hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#7A2D61] transition-all'
const SHADOW_ACTIVE = 'active:translate-x-0 active:translate-y-0 active:shadow-none'

/** Shadow badge/tag. */
const SHADOW_BADGE = 'shadow-[3px_3px_0px_0px_#7A2D61]'

/** Stiker badge utama. */
const STICKER_BADGE = `bg-[#CD0179] text-white font-black uppercase tracking-wide ${BORDER} ${RADIUS} ${SHADOW_BADGE} px-4 py-2`

/** Kartu dasar yang bisa di-hover. */
const CARD = `bg-white ${BORDER} ${RADIUS} ${SHADOW_CARD}`
const CARD_INTERACTIVE = `${CARD} ${SHADOW_HOVER} ${SHADOW_ACTIVE}`

/** Latar halaman. */
const PAGE_BG = 'bg-[#FDF1FC]'

/* ------------------------------------------------------------------
   DATA MOCK
------------------------------------------------------------------- */

type Article = {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  image: string
  featured?: boolean
}

const CATEGORIES = [
  'Semua',
  'Kabar Wilayah',
  'Opini & Literasi',
  'Pengumuman',
  'Prestasi',
] as const

/** Aksen warna per kategori — seluruhnya dari palet app/profile/page.tsx. */
const CATEGORY_ACCENT: Record<string, string> = {
  'Kabar Wilayah': 'bg-[#CD0179]',
  'Opini & Literasi': 'bg-[#7A2D61]',
  'Pengumuman': 'bg-[#18181B]',
  'Prestasi': 'bg-[#4A012C]',
}

const ARTICLES: Article[] = [
  {
    id: 1,
    featured: true,
    title: 'PW IPM Sulteng Luncurkan Program Tadulako Mengajar untuk 5.000 Pelajar se-Sulteng',
    excerpt:
      'Kolaborasi seluruh cabang IPM se-Sulawesi Tengah untuk menghadirkan modul literasi, numerasi, dan kepemimpinan yang terstruktur di sekolah-sekolah mitra.',
    category: 'Kabar Wilayah',
    date: '26 September 2026',
    readTime: '5 menit',
    author: 'Redaksi IPM Sulteng',
    image: '/berita_img.jpeg',
  },
  {
    id: 2,
    title: 'Pendaftaran Lomba Esai Nasional IPM 2026 Resmi Dibuka',
    excerpt:
      'Seluruh kader IPM se-Indonesia dapat mendaftar lewat formulir daring resmi yang masih dibuka sampai 30 Oktober 2026.',
    category: 'Pengumuman',
    date: '24 September 2026',
    readTime: '3 menit',
    author: 'Sekretariat PW',
    image: '/pengumuman_img.png',
  },
  {
    id: 3,
    title: 'Opini: Ruang Publik sebagai Ruang Tumbuh Generasi Berkarakter',
    excerpt:
      'Sekolah tidak cukup membentuk karakter saja tanpa ruang bagi pelajar untuk berkspresi dan berkarya secara bebas di ruang publik kotanya.',
    category: 'Opini & Literasi',
    date: '22 September 2026',
    readTime: '6 menit',
    author: 'Nabila Ramadhani',
    image: '/profil_img.JPG',
  },
  {
    id: 4,
    title: 'Tim Debat IPM Sulteng Raih Juara Umum dan Melaju ke Semifinal',
    excerpt:
      'Tim yang beranggotakan tiga pelajar dari tiga perguruan tinggi itu mengalahkan 24 tim lain pada babak penyisihan tingkat nasional.',
    category: 'Prestasi',
    date: '20 September 2026',
    readTime: '4 menit',
    author: 'Humas PW IPM',
    image: '/agenda_bg.JPG',
  },
  {
    id: 5,
    title: 'Pelantikan Pengurus IPM Cabang Palu Resmi Digelar',
    excerpt:
      'Lebih dari 300 kader hadir memenuhi aula utama gedung tersebut untuk menyimak struktur kepengurusan periode 2026-2028.',
    category: 'Kabar Wilayah',
    date: '18 September 2026',
    readTime: '3 menit',
    author: 'Redaksi IPM Sulteng',
    image: '/berita_img.jpeg',
  },
  {
    id: 6,
    title: 'Seleksi Berkas Kader Baru PW IPM Sulteng Periode 2026-2028 Dibuka',
    excerpt:
      'Calon kader dapat mendaftar melalui portal daring resmi, lalu mengunggah berkas pendukung seperti ijazah dan surat keterangan.',
    category: 'Pengumuman',
    date: '16 September 2026',
    readTime: '2 menit',
    author: 'Sekretariat PW',
    image: '/pengumuman_img.png',
  },
  {
    id: 7,
    title: 'Opini: Literasi Bukan Sekadar Membaca',
    excerpt:
      'Di era digital, literasi berarti mampu memahami, menguji, dan menggunakan informasi dari berbagai sumber secara bertanggung jawab.',
    category: 'Opini & Literasi',
    date: '14 September 2026',
    readTime: '7 menit',
    author: 'Fahri Ananda',
    image: '/profil_img.JPG',
  },
  {
    id: 8,
    title: 'Dua Kader IPM Sulteng Raih Medali Perak Olimpiade Bisnis',
    excerpt:
      'Dedikasi panjang keduanya dibangun lewat riset lapangan dan presentasi yang berbasis data nyata.',
    category: 'Prestasi',
    date: '12 September 2026',
    readTime: '4 menit',
    author: 'Humas PW IPM',
    image: '/agenda_bg.JPG',
  },
  {
    id: 9,
    title: 'Workshop Kepemimpinan Islami Hadir 120 Kader IPM se-Sulteng',
    excerpt:
      'Workshop nasional yang diikuti 120 kader untuk memperkuat kapasitas kepemimpinan Islami di lingkungan perguruan tinggi.',
    category: 'Kabar Wilayah',
    date: '10 September 2026',
    readTime: '5 menit',
    author: 'Redaksi IPM Sulteng',
    image: '/berita_img.jpeg',
  },
  {
    id: 10,
    title: 'Kolaborasi dengan Sekolah Dorong Budaya Literasi Sejak Dini',
    excerpt:
      'Kolaborasi PW IPM Sulteng dengan sekolah di empat kabupaten guna mendorong budaya literasi sejak dini lewat pojok baca pelajar.',
    category: 'Kabar Wilayah',
    date: '8 September 2026',
    readTime: '4 menit',
    author: 'Redaksi IPM Sulteng',
    image: '/mr.jpg',
  },
]

/* ------------------------------------------------------------------
   SUB-COMPONENTS
------------------------------------------------------------------- */

/** Badge kategori dengan aksen warna per kategori. */
function CategoryTag({ category }: { category: string }) {
  return (
    <span
      className={`inline-block text-white text-xs font-black uppercase tracking-wider px-3 py-1.5 ${BORDER} ${RADIUS} ${SHADOW_BADGE} ${
        CATEGORY_ACCENT[category] ?? 'bg-[#CD0179]'
      }`}
    >
      {category}
    </span>
  )
}

/** Metadata tanggal, penulis, dan waktu baca. */
function ArticleMeta({
  date,
  author,
  readTime,
  className = 'text-slate-600',
}: {
  date: string
  author: string
  readTime: string
  className?: string
}) {
  return (
    <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-bold ${className}`}>
      <span className="inline-flex items-center gap-1.5">
        <Calendar size={14} className="text-[#CD0179]" />
        {date}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <User size={14} className="text-[#CD0179]" />
        {author}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock size={14} className="text-[#CD0179]" />
        {readTime}
      </span>
    </div>
  )
}

/** Kartu artikel untuk grid 3 kolom. */
function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/news/${article.id}`}
      className={`group flex flex-col overflow-hidden ${CARD_INTERACTIVE}`}
    >
      {/* Thumbnail */}
      <div className="relative h-44 w-full overflow-hidden border-b-2 border-[#7A2D61] bg-[#FDF1FC]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <CategoryTag category={article.category} />

        <h3 className="font-black text-slate-900 line-clamp-2 text-lg leading-snug group-hover:text-[#CD0179] transition-colors">
          {article.title}
        </h3>

        <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed">
          {article.excerpt}
        </p>

        <div className="mt-auto flex flex-col gap-2 pt-2">
          <ArticleMeta
            date={article.date}
            author={article.author}
            readTime={article.readTime}
          />
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wide text-[#7A2D61] group-hover:text-[#CD0179] transition-colors">
            Baca Selengkapnya
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </span>
        </div>
      </div>
    </Link>
  )
}

/** Kartu headline / breaking news full-width 2 kolom. */
function FeaturedArticle({ article }: { article: Article }) {
  return (
    <article
      className={`group grid grid-cols-1 lg:grid-cols-2 overflow-hidden ${CARD_INTERACTIVE}`}
    >
      {/* Thumbnail besar */}
      <div className="relative h-64 w-full overflow-hidden border-b-2 border-[#7A2D61] lg:h-full lg:border-b-0 lg:border-r-2 bg-[#FDF1FC]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Label BREAKING */}
        <div
          className={`absolute left-0 top-0 ${STICKER_BADGE} text-xs tracking-widest`}
        >
         Breaking News
        </div>
      </div>

      {/* Konten */}
      <div className="flex flex-col gap-5 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`inline-block bg-[#CD0179] text-white text-xs font-black uppercase tracking-widest px-3 py-1.5 ${BORDER} ${RADIUS} ${SHADOW_BADGE}`}
          >
            {article.category}
          </span>
          <ArticleMeta
            date={article.date}
            author={article.author}
            readTime={article.readTime}
            className="text-slate-500"
          />
        </div>

        <h2 className="font-black text-slate-900 text-2xl md:text-3xl leading-tight">
          {article.title}
        </h2>

        <p className="text-slate-700 font-medium leading-relaxed text-base">
          {article.excerpt}
        </p>

        <Link
          href={`/news/${article.id}`}
          className={`mt-auto inline-flex items-center justify-between gap-3 bg-black text-white px-6 py-4 font-black uppercase tracking-wider ${BORDER} ${RADIUS} ${SHADOW_CARD} hover:bg-[#7A2D61] ${SHADOW_HOVER} ${SHADOW_ACTIVE} transition-all group/btn`}
        >
          <span>Baca Selengkapnya</span>
          <span className="transition-transform duration-300 group-hover/btn:translate-x-2">
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  )
}

/* ------------------------------------------------------------------
   HALAMAN UTAMA
------------------------------------------------------------------- */

export default function NewsPortal({ initialQuery = '' }: { initialQuery?: string }) {
  const router = useRouter()

  const [query, setQuery] = useState(initialQuery)
  const [activeCategory, setActiveCategory] = useState<string>('Semua')
  const [visibleCount, setVisibleCount] = useState(6)

  // Sinkronkan query dari URL (mis. hasil push dari Navbar).
  useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  // Reset paginasi saat filter berubah.
  useEffect(() => {
    setVisibleCount(6)
  }, [activeCategory, query])

  const featured = ARTICLES.find((a) => a.featured) ?? ARTICLES[0]
  const keyword = query.trim().toLowerCase()

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchCategory =
        activeCategory === 'Semua' || article.category === activeCategory
      const matchKeyword =
        keyword === '' ||
        article.title.toLowerCase().includes(keyword) ||
        article.excerpt.toLowerCase().includes(keyword) ||
        article.category.toLowerCase().includes(keyword)

      return matchCategory && matchKeyword
    })
  }, [activeCategory, keyword])

  const isFiltered = activeCategory !== 'Semua' || keyword !== ''

  // Headline disembunyikan bila tidak cocok dengan filter aktif.
  const showFeatured =
    !isFiltered ||
    ((activeCategory === 'Semua' || featured.category === activeCategory) &&
      (keyword === '' ||
        featured.title.toLowerCase().includes(keyword) ||
        featured.excerpt.toLowerCase().includes(keyword) ||
        featured.category.toLowerCase().includes(keyword)))

  const restArticles = filteredArticles.filter((a) => a.id !== featured.id)
  const gridArticles = restArticles.slice(0, visibleCount)
  const hasMore = restArticles.length > visibleCount

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const next = query.trim()
    router.replace(next ? `/news?search=${encodeURIComponent(next)}` : '/news', {
      scroll: false,
    })
  }

  const resetFilters = () => {
    setQuery('')
    setActiveCategory('Semua')
    router.replace('/news', { scroll: false })
  }

  return (
    <div className={`${PAGE_BG} pb-24`}>
      {/* ================= HERO HEADER ================= */}
      <section className="relative pt-24 pb-12 md:pb-16 overflow-hidden bg-[#18181B]">
        <Image
          src="/berita_bg.png"
          alt="Berita IPM Sulawesi Tengah"
          fill
          priority
          className="object-cover object-center blur-[1.5px] z-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A012C]/90 to-[#18181B]/80 z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="flex flex-col gap-6 max-w-3xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm font-bold text-gray-300">
              <Link href="/" className="hover:text-white transition-colors">
                Beranda
              </Link>
              <span>/</span>
              <span className="text-white">Berita &amp; Kabar</span>
            </nav>

            {/* Headline badge */}
            <h1 className="text-2xl md:text-4xl font-bold leading-snug drop-shadow-lg">
              <span className={`inline-block ${STICKER_BADGE}`}>
                Kabar Pelajar Tadulako
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-xl font-medium text-white leading-relaxed border-l-4 border-[#CD0179] pl-6 bg-black/20 py-2">
              Portal berita dan kabar terkini PW IPM Sulawesi Tengah: liputan
              wilayah, opini dan literasi pelajar, pengumuman resmi, serta
              prestasi kader yang terus bertumbuh.
            </p>

            {/* Search bar */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl pt-2"
            >
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A2D61]"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cari judul, topik, atau kategori berita..."
                  aria-label="Cari berita"
                  className={`w-full bg-white ${BORDER} ${RADIUS} ${SHADOW_BADGE} placeholder:text-slate-400 font-bold pl-12 pr-4 py-3 outline-none focus:bg-[#FDF1FC] transition-colors`}
                />
              </div>
              <button
                type="submit"
                className={`inline-flex items-center justify-center gap-2 bg-[#CD0179] text-white px-6 py-3 font-black uppercase tracking-wider ${BORDER} ${RADIUS} ${SHADOW_CARD} hover:bg-[#7A2D61] ${SHADOW_HOVER} ${SHADOW_ACTIVE} transition-all cursor-pointer`}
              >
                <Search size={18} />
                Cari Berita
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= KATEGORI FILTER TABS ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className={`flex flex-wrap items-center gap-3 p-4 ${CARD}`}>
          <span
            className={`inline-flex items-center gap-2 bg-[#18181B] text-white text-xs font-black uppercase tracking-widest px-3 py-2 ${BORDER} ${RADIUS} ${SHADOW_BADGE}`}
          >
            <Newspaper size={16} />
            Kategori
          </span>

          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={
                  isActive
                    ? `bg-[#CD0179] text-white ${BORDER} ${RADIUS} ${SHADOW_BADGE} font-black uppercase tracking-wide px-4 py-2 ${SHADOW_ACTIVE} transition-all cursor-pointer`
                    : `bg-white text-[#7A2D61] ${BORDER} ${RADIUS} ${SHADOW_BADGE} font-bold px-4 py-2 hover:bg-[#FDF1FC] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_#7A2D61] transition-all cursor-pointer`
                }
              >
                {category}
              </button>
            )
          })}

          {/* Reset filter */}
          {isFiltered && (
            <button
              type="button"
              onClick={resetFilters}
              className={`inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-black uppercase tracking-wider px-4 py-2 ${BORDER} ${RADIUS} ${SHADOW_BADGE} hover:bg-[#CD0179] ${SHADOW_HOVER} ${SHADOW_ACTIVE} transition-all cursor-pointer`}
            >
              <X size={14} />
              Reset
            </button>
          )}
        </div>
      </div>

      {/* ================= KONTEN UTAMA ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 flex flex-col gap-12">
        {/* Featured Article */}
        {showFeatured && (
          <section aria-label="Berita Pilihan">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase">
                Berita Pilihan
              </h2>
              <span className="h-1 flex-1 bg-[#7A2D61]" aria-hidden="true" />
            </div>
            <FeaturedArticle article={featured} />
          </section>
        )}

        {/* News Grid */}
        <section aria-label="Daftar Berita">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 uppercase">
                Kabar Terbaru
              </h2>
              <span className="h-1 flex-1 min-w-12 bg-[#7A2D61]" aria-hidden="true" />
            </div>
            <span
              className={`inline-block bg-white text-[#7A2D61] text-xs font-black uppercase tracking-wider px-3 py-1.5 ${BORDER} ${RADIUS} ${SHADOW_BADGE}`}
            >
              {filteredArticles.length} Artikel
            </span>
          </div>

          {gridArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gridArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className={`flex flex-col items-center gap-4 text-center p-12 ${CARD}`}>
              <span
                className={`inline-flex items-center gap-2 bg-[#CD0179] text-white text-sm font-black uppercase tracking-widest px-4 py-2 ${BORDER} ${RADIUS} ${SHADOW_BADGE}`}
              >
                <Newspaper size={18} />
                Tidak Ada Hasil
              </span>
              <p className="font-bold text-slate-700 max-w-md">
                Tidak ada berita yang cocok dengan pencarian atau kategori
                yang dipilih. Coba kata kunci lain atau tampilkan semua
                berita.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className={`inline-flex items-center gap-2 bg-black text-white px-6 py-3 font-black uppercase tracking-wider ${BORDER} ${RADIUS} ${SHADOW_CARD} hover:bg-[#7A2D61] ${SHADOW_HOVER} ${SHADOW_ACTIVE} transition-all cursor-pointer`}
              >
                Tampilkan Semua Berita
              </button>
            </div>
          )}
        </section>

        {/* Pagination / Load More */}
        {hasMore && (
          <div className="flex flex-col items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + 6)}
              className={`inline-flex items-center justify-center gap-3 bg-[#CD0179] text-white px-8 py-4 font-black uppercase tracking-wider ${BORDER} ${RADIUS} ${SHADOW_CARD} hover:bg-[#7A2D61] ${SHADOW_HOVER} ${SHADOW_ACTIVE} transition-all cursor-pointer`}
            >
              Muat Berita Lainnya
              <ArrowRight size={20} />
            </button>
            <p className="text-xs font-bold text-slate-600">
              Menampilkan {gridArticles.length} dari {restArticles.length} berita
            </p>
          </div>
        )}
      </main>
    </div>
  )
}

