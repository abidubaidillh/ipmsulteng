import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import DivisionSlider from './DivisionSlider'

export const metadata: Metadata = {
  title: 'Profil PW IPM Sulawesi Tengah | Pelajar Tadulako',
  description:
    'Kenali struktur, tim, dan program unggulan PW IPM Sulawesi Tengah beserta dampaknya bagi pergerakan pelajar di Bumi Tadulako.',
  keywords: 'profil IPM Sulteng, PW IPM Sulawesi Tengah, profil PW IPM',
}

type Crumb = { label: string; href?: string }

const BREADCRUMBS: Crumb[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Profil', href: '/profile' },
  { label: 'PW IPM Sulteng' },
]

export default function SultengProfilePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FDFBF7] pb-24">
      {/* ------------------------------------------------------------------
          HERO HEADER — bergambar (mengikuti pola app/profile/sejarah/page.tsx)
      ------------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#18181B] pt-28 pb-20 md:pt-36 md:pb-24 min-h-[480px] md:min-h-[540px] flex flex-col justify-center">
        {/* Latar belakang gambar */}
        <Image
          src="/sulteng_bg.jpg"
          alt="PW IPM Sulawesi Tengah Background"
          fill
          priority
          className="z-0 object-cover object-center blur-[1.5px]"
        />

        {/* Overlay semi-transparan agar teks tetap kontras & terbaca jelas */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-black/60" />
        {/* Gradasi brand, mengikuti pola hero halaman Profil */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#4A012C]/30 via-transparent to-[#18181B]/70" />

        <div className="relative z-20 mx-auto w-full max-w-7xl px-6">
          <div className="flex max-w-3xl flex-col gap-6">
            {/* ------------------------------------------------------------------
                BREADCRUMBS
            ------------------------------------------------------------------- */}
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-sm font-bold text-gray-300"
            >
              {BREADCRUMBS.map((crumb, index) => {
                const isLast = index === BREADCRUMBS.length - 1
                return (
                  <span key={crumb.label} className="flex items-center gap-2">
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#18181B]"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-white" aria-current="page">
                        {crumb.label}
                      </span>
                    )}
                    {!isLast && <ChevronRight size={16} aria-hidden="true" className="text-[#F1A4D9]" />}
                  </span>
                )
              })}
            </nav>

            {/* ------------------------------------------------------------------
                JUDUL & DESKRIPSI (Stiker Neo-Brutalist)
            ------------------------------------------------------------------- */}
            <div className="flex flex-col items-start gap-4">
              <div className="inline-block -rotate-1 border-2 border-black bg-[#CD0179] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-[2px_2px_0px_0px_#000]">
                Pelajar Tadulako
              </div>
              <h1 className="text-3xl font-black uppercase text-white drop-shadow-lg md:text-5xl">
                PW IPM Sulteng
              </h1>
              <div className="border-l-4 border-[#CD0179] bg-black/20 p-4 backdrop-blur-sm">
                <p className="text-base font-medium leading-relaxed text-white md:text-lg">
                  Kenali struktur, tim, dan program unggulan PW IPM Sulawesi Tengah beserta dampaknya bagi pergerakan pelajar di Bumi Tadulako.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section Utama (2 Kolom Layout) */}
      <section className="container mx-auto px-4 mt-12 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* KOLOM KIRI (Narasi & Statistik) */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none text-gray-800 font-plus-jakarta">
              <h2 className="text-3xl font-bold font-space-grotesk text-[#7A2D61] mb-6">
                Pengabdian & Kekeluargaan
              </h2>
              <p className="leading-relaxed">
                Pimpinan Wilayah Ikatan Pelajar Muhammadiyah (PW IPM) Sulawesi Tengah, yang dikenal dengan sebutan <strong>Pelajar Tadulako</strong>, adalah wadah pergerakan dan pembinaan pelajar yang menjunjung tinggi nilai-nilai pengabdian, keislaman, serta kekeluargaan. Kami berkomitmen untuk terus berinovasi dan bersinergi dalam menciptakan ruang gerak yang produktif dan inspiratif bagi seluruh pelajar di Bumi Tadulako.
              </p>
              <p className="leading-relaxed mt-4">
                Berlandaskan semangat kebersamaan, kami bergerak dari akar rumput untuk membangun kesadaran kolektif. Setiap langkah kami dedikasikan untuk mencetak kader-kader yang tidak hanya unggul secara intelektual, namun juga memiliki kepekaan sosial dan moral yang tangguh dalam menghadapi tantangan zaman.
              </p>
            </div>

            {/* List Highlight Statistik Modern */}
            <div className="space-y-6 pt-4 mt-6">
              {/* Statistik 1 */}
              <div className="border-l-4 border-[#CD0179] pl-5">
                <h3 className="text-xl font-bold text-[#7A2D61] font-space-grotesk mb-1">12 Bidang</h3>
                <p className="text-gray-600 font-plus-jakarta leading-relaxed">
                  Dua belas bidang yang saling bersinergi menggerakkan roda organisasi.
                </p>
              </div>

              {/* Statistik 2 */}
              <div className="border-l-4 border-[#CD0179] pl-5">
                <h3 className="text-xl font-bold text-[#7A2D61] font-space-grotesk mb-1">100+ Dedikasi</h3>
                <p className="text-gray-600 font-plus-jakarta leading-relaxed">
                  Lebih dari seratus pelajar yang berdedikasi tinggi membangun umat dan bangsa.
                </p>
              </div>

              {/* Statistik 3 */}
              <div className="border-l-4 border-[#CD0179] pl-5">
                <h3 className="text-xl font-bold text-[#7A2D61] font-space-grotesk mb-1">15+ Program Kerja</h3>
                <p className="text-gray-600 font-plus-jakarta leading-relaxed">
                  Program kerja unggulan yang berfokus pada inovasi nyata di berbagai sektor kehidupan pelajar.
                </p>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN (Interactive Image Slider per Divisi) */}
          <div className="w-full">
            <DivisionSlider />
          </div>

        </div>
      </section>
    </div>
  )
}

