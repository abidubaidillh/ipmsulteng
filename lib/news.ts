/**
 * Sumber data tunggal untuk seluruh berita IPM Sulawesi Tengah.
 *
 * Dipakai oleh:
 *  - `components/NewsPortal.tsx`  (portal /news)
 *  - `app/news/[id]/page.tsx`     (halaman detail berita)
 *
 * CATATAN KASUS HURUF (penting untuk production):
 * `public/` disajikan oleh filesystem Linux di Vercel yang PEKA HURUF.
 * Seluruh `image` di bawah wajib cocok persis dengan nama file di `public/`
 * (huruf besar/kecil). Gunakan `next/image` atau komponen <img> agar path
 * tetap konsisten.
 */

export type Article = {
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

export const CATEGORIES = [
  'Semua',
  'Kabar Wilayah',
  'Opini & Literasi',
  'Pengumuman',
  'Prestasi',
] as const

/** Aksen warna per kategori — seluruhnya dari palet app/profile/page.tsx. */
export const CATEGORY_ACCENT: Record<string, string> = {
  'Kabar Wilayah': 'bg-[#CD0179]',
  'Opini & Literasi': 'bg-[#7A2D61]',
  'Pengumuman': 'bg-[#18181B]',
  'Prestasi': 'bg-[#4A012C]',
}

export const ARTICLES: Article[] = [
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
      'Sekolah tidak cukup membentuk karakter saja tanpa ruang bagi pelajar untuk bereskpresi dan berkarya secara bebas di ruang publik kotanya.',
    category: 'Opini & Literasi',
    date: '22 September 2026',
    readTime: '6 menit',
    author: 'Nabila Ramadhani',
    image: '/profil_img.jpg',
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
    image: '/agenda_bg.jpg',
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
    image: '/profil_img.jpg',
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
    image: '/agenda_bg.jpg',
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

/** Semua id berita yang valid, dalam bentuk string untuk route segment. */
export const ARTICLE_IDS: string[] = ARTICLES.map((article) => String(article.id))

/** Pencarian artikel berdasarkan id dari route (`/news/[id]`). */
export function getArticle(id: string): Article | undefined {
  return ARTICLES.find((article) => String(article.id) === id)
}
