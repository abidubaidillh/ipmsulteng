import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { ArrowLeft, ChevronRight, HardHat } from 'lucide-react'

type Crumb = {
  label: string
  href?: string
}

type UnderConstructionPageProps = {
  /** Judul halaman, ditampilkan sebagai heading utama (H1). */
  title: string
  /** Label kecil pada badge stiker di atas judul. */
  eyebrow?: string
  /** Penjelasan singkat mengapa halaman ini belum tersedia. */
  description?: string
  /** Ikon lucide-react untuk kartu utama. */
  icon?: LucideIcon
  /** Navigasi breadcrumb, dimulai dari Beranda. */
  breadcrumbs?: Crumb[]
  /** Tujuan tombol "Kembali". */
  backHref?: string
  /** Label tombol "Kembali". */
  backLabel?: string
}

const DEFAULT_CRUMBS: Crumb[] = [{ label: 'Beranda', href: '/' }]

export default function UnderConstructionPage({
  title,
  eyebrow = 'Segera Hadir',
  description = 'Konten halaman ini sedang kami susun secara bertahap. Mohon maaf atas ketidaknyamanan ini, PW IPM Sulawesi Tengah terus berkarya menghasilkan halaman yang bermutu untuk seluruh pelajar.',
  icon: Icon = HardHat,
  breadcrumbs = DEFAULT_CRUMBS,
  backHref = '/',
  backLabel = 'Kembali ke Beranda',
}: UnderConstructionPageProps) {
  return (
    <div className="min-h-screen bg-[#FDF1FC] pb-24 pt-24 md:pt-28 relative overflow-hidden">
      {/* Dekorasi latar neo-brutalist */}
      <div className="absolute top-24 -left-16 w-64 h-64 bg-[#CD0179]/10 rounded-full -z-10" />
      <div className="absolute bottom-10 -right-16 w-72 h-72 bg-[#7A2D61]/10 rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-bold text-[#7A2D61]">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1
            return (
              <span key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {crumb.href && !isLast ? (
                  <Link href={crumb.href} className="hover:text-[#CD0179] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={isLast ? 'text-black' : undefined}>{crumb.label}</span>
                )}
                {!isLast && <ChevronRight size={14} className="text-[#CD0179]" aria-hidden="true" />}
              </span>
            )
          })}
        </nav>

        {/* Judul Halaman */}
        <div className="mt-6 flex flex-col items-start gap-4">
          <span className="inline-block bg-[#CD0179] text-white font-black uppercase tracking-wide border-2 border-[#7A2D61] shadow-[3px_3px_0px_0px_#7A2D61] px-4 py-2 text-xs md:text-sm">
            {eyebrow}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-black uppercase leading-tight">{title}</h1>
        </div>

        {/* Kartu Under Construction */}
        <div className="mt-10 md:mt-14">
          <div className="bg-white border-2 border-[#7A2D61] shadow-[4px_4px_0px_0px_#7A2D61] p-8 md:p-12 relative overflow-hidden group">
            {/* Aksen sudut */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#CD0179] rounded-bl-full opacity-10 border-l-2 border-b-2 border-[#7A2D61]" />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Ikon */}
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#CD0179] text-white border-2 border-[#7A2D61] shadow-[4px_4px_0px_0px_#7A2D61]">
                <Icon size={40} className="md:h-12 md:w-12" aria-hidden="true" />
              </div>

              {/* Badge stiker */}
              <span className="mt-8 inline-block bg-[#CD0179] text-white font-black uppercase tracking-widest text-xs md:text-sm px-4 py-2 border-2 border-[#7A2D61] shadow-[3px_3px_0px_0px_#7A2D61]">
                Dalam Pengembangan
              </span>

              {/* Pesan utama */}
              <h2 className="mt-6 text-2xl md:text-4xl font-black text-black uppercase leading-tight">
                Halaman Ini Sedang Dalam Tahap Pengembangan
              </h2>

              <p className="mt-4 text-base md:text-lg font-medium text-gray-700 max-w-2xl leading-relaxed">
                {description}
              </p>

              {/* Progress bar */}
              <div
                className="mt-10 w-full max-w-md h-4 bg-[#FDF1FC] border-2 border-[#7A2D61] overflow-hidden"
                role="progressbar"
                aria-label="Progres pembangunan halaman"
                aria-valuenow={40}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="h-full w-2/5 bg-[#CD0179] animate-pulse" />
              </div>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.3em] text-[#7A2D61]">
                Sabar · Sedang Dikerjakan
              </p>

              {/* Tombol Kembali */}
              <Link
                href={backHref}
                className="mt-10 inline-flex items-center gap-3 bg-black text-white px-6 md:px-8 py-4 font-black uppercase tracking-wider border-2 border-[#7A2D61] shadow-[4px_4px_0px_0px_#7A2D61] hover:bg-[#7A2D61] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#7A2D61] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all group/btn"
              >
                <ArrowLeft size={20} className="transition-transform group-hover/btn:-translate-x-1" aria-hidden="true" />
                <span>{backLabel}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
