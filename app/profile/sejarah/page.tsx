import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, ChevronRight, Landmark, Users } from 'lucide-react'
import HistoryTimeline from '@/components/HistoryTimeline'

export const metadata: Metadata = {
  title: 'Sejarah IPM - PW IPM Sulawesi Tengah',
  description:
    'Jejak langkah berdirinya Ikatan Pelajar Muhammadiyah pada 18 Juli 1961 (5 Safar 1381 H) di Surakarta hingga perkembangan PW IPM Sulawesi Tengah di era milenial dan digital.',
  keywords:
    'sejarah IPM, sejarah Ikatan Pelajar Muhammadiyah, IPM 1961, IRM 1992, restorasi IPM 2008, PW IPM Sulteng',
}

/** Design system — Neo-Brutalist Magenta (referensi: app/profile/page.tsx). */
const BORDER = 'border-2 border-[#7A2D61]'
const SHADOW_CARD = 'shadow-[4px_4px_0px_0px_#7A2D61]'
const SHADOW_BADGE = 'shadow-[3px_3px_0px_0px_#7A2D61]'
const CARD_HOVER =
  'hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#7A2D61] transition-all'
const CARD_ACTIVE = 'active:translate-x-0 active:translate-y-0 active:shadow-none'

type Crumb = { label: string; href?: string }

const BREADCRUMBS: Crumb[] = [
  { label: 'Beranda', href: '/' },
  { label: 'Profil', href: '/profile' },
  { label: 'Sejarah' },
]

/** Fakta kunci sejarah yang ditampilkan sebagai stik kecil di Sekilas Sejarah. */
const KEY_FACTS = [
  { label: 'Tanggal Pendirian', value: '18 Juli 1961 M', icon: Landmark },
  { label: 'Penetapan Hijriah', value: '5 Safar 1381 H', icon: BookOpen },
  { label: 'Tempat Kelahiran', value: 'Surakarta, Jateng', icon: Users },
]

export default function SejarahPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FDF1FC] pb-24">
      {/* ------------------------------------------------------------------
          HERO HEADER — bergambar (mengikuti pola app/profile/page.tsx)
          Path gambar ditulis huruf kecil: /sejarah_bg.jpg (aman di Linux/Vercel)
      ------------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-[#18181B] pt-28 pb-20 md:pt-36 md:pb-24 min-h-[480px] md:min-h-[540px] flex flex-col justify-center">
        {/* Latar belakang gambar */}
        <Image
          src="/sejarah_bg.jpg"
          alt="Latar Sejarah Ikatan Pelajar Muhammadiyah"
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
                BREADCRUMBS: Beranda > Profil > Sejarah
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
                      <Link href={crumb.href} className="transition-colors hover:text-white">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? 'text-white' : undefined}>{crumb.label}</span>
                    )}
                    {!isLast && (
                      <ChevronRight size={14} className="text-[#F1A4D9]" aria-hidden="true" />
                    )}
                  </span>
                )
              })}
            </nav>

            {/* ------------------------------------------------------------------
                HERO CONTENT: badge stiker + judul + narasi
            ------------------------------------------------------------------- */}
            <header className="flex flex-col items-start gap-5">
              {/* Badge stiker */}
              <span
                className={`inline-block bg-[#CD0179] px-4 py-2 text-xs font-black uppercase tracking-widest text-white md:text-sm ${BORDER} ${SHADOW_BADGE}`}
              >
                Jejak Langkah Perjuangan
              </span>

              <h1 className="text-3xl font-black uppercase leading-tight text-white drop-shadow-lg md:text-5xl">
                Sejarah Ikatan Pelajar Muhammadiyah
              </h1>

              <p className="border-l-4 border-[#CD0179] bg-black/20 py-2 pl-6 text-base font-medium leading-relaxed text-white md:text-xl">
                Spirit gerakan keilmuan dan dakwah yang lahir di Surakarta pada 1961 terus menggelora
                di Bumi Tadulako. Inilah catatan perjalanan Ikatan Pelajar Muhammadiyah — dari
                kelahiran, penyesuaian nama, restorasi, hingga era digital bersama Pelajar Tadulako
                di Sulawesi Tengah.
              </p>
            </header>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------
          KONTEN UTAMA — di bawah hero
      ------------------------------------------------------------------- */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Dekorasi latar neo-brutalist (-z-10 agar tidak menutupi kartu) */}
        <div className="absolute -left-16 top-0 -z-10 h-64 w-64 rounded-full bg-[#CD0179]/10" />
        <div className="absolute -bottom-16 -right-16 -z-10 h-72 w-72 rounded-full bg-[#7A2D61]/10" />

        {/* ------------------------------------------------------------------
            SEKILAS SEJARAH
        ------------------------------------------------------------------- */}
        <section aria-labelledby="sekilas-sejarah" className="mt-12 md:mt-16">
          <div className={`relative overflow-hidden bg-white p-8 md:p-12 ${BORDER} ${SHADOW_CARD}`}>
            {/* Aksen sudut */}
            <div
              className={`absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#CD0179] opacity-10 ${BORDER} border-l-0 border-b-0`}
            />

            <div className="relative z-10">
              <span
                className={`inline-block bg-black px-3 py-1 text-xs font-black uppercase tracking-widest text-white ${BORDER} ${SHADOW_BADGE}`}
              >
                Sekilas Sejarah
              </span>

              <h2
                id="sekilas-sejarah"
                className="mt-5 text-2xl font-black uppercase leading-snug text-black md:text-3xl"
              >
                Lahir dari Ruang Ilmu dan Panggilan Dakwah
              </h2>

              <div className="mt-6 grid gap-5 text-base font-medium leading-relaxed text-gray-700 md:text-lg">
                <p>
                  Ikatan Pelajar Muhammadiyah (IPM) resmi lahir pada{' '}
                  <strong className="font-black text-[#7A2D61]">18 Juli 1961 M</strong> — bertepatan
                  dengan <strong className="font-black text-[#7A2D61]">5 Safar 1381 H</strong> — di{' '}
                  <strong className="font-black text-[#7A2D61]">Surakarta</strong>, Jawa Tengah.
                  Kehadirannya menjawab kebutuhan ruang berkumpul dan bergerak bagi pelajar
                  Muhammadiyah yang haus akan ilmu sekaligus panggilan dakwah.
                </p>
                <p>
                  Sejak hari pertama, IPM menumbuhkan <em className="font-black not-italic text-[#CD0179]">spirit
                  ilmu dan dakwah</em> di kalangan pelajar: kajian yang mengasah akal, dan aksi yang
                  mengasah hati. Prinsip{' '}
                  <strong className="font-black text-[#7A2D61]">amar ma&rsquo;ruf nahi munkar</strong>{' '}
                  menjadi kompas — mengajak kepada kebaikan dan mencegah kemungkaran — agar pelajar
                  tumbuh menjadi kader yang berintegritas, berilmu, dan berani berkontribusi. Semangat
                  itu pula yang diwarisi Pelajar Tadulako di Sulawesi Tengah hingga hari ini.
                </p>
              </div>

              {/* Fakta kunci */}
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {KEY_FACTS.map((fact) => {
                  const FactIcon = fact.icon
                  return (
                    <li
                      key={fact.label}
                      className={`flex items-center gap-3 bg-[#FDF1FC] p-4 ${BORDER} ${SHADOW_BADGE}`}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center bg-[#CD0179] text-white ${BORDER}`}
                      >
                        <FactIcon size={18} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#7A2D61]">
                          {fact.label}
                        </span>
                        <span className="block truncate text-sm font-black text-black">
                          {fact.value}
                        </span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------
            INTERACTIVE VISUAL TIMELINE
        ------------------------------------------------------------------- */}
        <section aria-labelledby="garis-waktu" className="mt-14 md:mt-20">
          <div className="flex flex-col items-start gap-3">
            <h2 id="garis-waktu" className="text-2xl font-black uppercase text-black md:text-4xl">
              Empat Fase Perjalanan IPM
            </h2>
          </div>

          <div className="mt-10 md:mt-14">
            <HistoryTimeline />
          </div>
        </section>

        {/* ------------------------------------------------------------------
            CALL TO ACTION
        ------------------------------------------------------------------- */}
        <section
          aria-labelledby="cta-sejarah"
          className={`relative mt-14 overflow-hidden bg-[#CD0179] p-8 text-white md:mt-20 md:p-12 ${BORDER} ${SHADOW_CARD}`}
        >
          {/* Dekorasi latar */}
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10" />
          <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-black/10" />

          <div className="relative z-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2
                id="cta-sejarah"
                className="text-2xl font-black uppercase leading-snug md:text-4xl"
              >
                Mari Telusuri Perjalanan Kami Lebih Lanjut
              </h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-white/90 md:text-lg">
                Kenali lebih dekat struktur pimpinan Pelajar Tadulako di Sulawesi Tengah, atau baca
                landasan hukum dan pedoman resmi yang memandu setiap langkah pergerakan IPM.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-4 sm:flex-row md:flex-col xl:flex-row">
              <Link
                href="/profile/sulteng"
                className={`group/cta inline-flex items-center justify-between gap-3 bg-white px-6 py-4 text-sm font-black uppercase tracking-wider text-black ${BORDER} ${SHADOW_CARD} ${CARD_HOVER} ${CARD_ACTIVE}`}
              >
                <span>Lihat Profil Pengurus</span>
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform group-hover/cta:translate-x-1"
                />
              </Link>

              <Link
                href="/directory/pedoman-ipm"
                className={`group/cta inline-flex items-center justify-between gap-3 bg-black px-6 py-4 text-sm font-black uppercase tracking-wider text-white ${BORDER} ${SHADOW_CARD} ${CARD_HOVER} ${CARD_ACTIVE}`}
              >
                <span>Buka Pedoman IPM</span>
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform group-hover/cta:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

