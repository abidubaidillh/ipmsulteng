'use client'

import { useState } from 'react'
import type { LucideIcon } from 'lucide-react'
import { CalendarDays, ChevronRight, Megaphone, Rocket, ScrollText, Sparkles } from 'lucide-react'

/* ------------------------------------------------------------------
   DESIGN SYSTEM — Neo-Brutalist Magenta
   Referensi: app/page.tsx, app/profile/page.tsx & components/NewsPortal.tsx
------------------------------------------------------------------- */

/** Outline: seluruh kartu dan badge. */
const BORDER = 'border-2 border-[#7A2D61]'

/** Shadow default (kartu/kontainer) + hover + active. */
const SHADOW_CARD = 'shadow-[4px_4px_0px_0px_#7A2D61]'
const SHADOW_HOVER =
  'hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#7A2D61] transition-all'
const SHADOW_ACTIVE = 'active:translate-x-0 active:translate-y-0 active:shadow-none'

/* ------------------------------------------------------------------
   DATA — 4 fase sejarah utama IPM
------------------------------------------------------------------- */

type Milestone = {
  id: string
  /** Label tahun pendek pada badge. */
  year: string
  /** Tanggal resmi / penanda era. */
  date: string
  /** Nomor fase ("01" s/d "04"). */
  phase: string
  /** Judul lengkap milestone sesuai naskah. */
  title: string
  /** Ringkasan naratif singkat. */
  summary: string
  /** Butir detail yang muncul saat kartu aktif. */
  details: string[]
  icon: LucideIcon
}

const MILESTONES: Milestone[] = [
  {
    id: 'kelahiran-1961',
    year: '1961',
    date: '18 Juli 1961 · 5 Safar 1381 H',
    phase: '01',
    title: '1961 — Kelahiran Ikatan Pelajar Muhammadiyah',
    summary:
      'IPM lahir di Surakarta sebagai wadah dakwah dan keilmuan pelajar Muhammadiyah — menggerakkan amar ma’ruf nahi munkar di kalangan pelajar.',
    details: [
      'Didirikan pada 18 Juli 1961 M / 5 Safar 1381 H di Surakarta, Jawa Tengah.',
      'Menjadi ruang organisasi bagi pelajar Muhammadiyah untuk mendalami ilmu dan menyalakan semangat dakwah.',
      'Menanamkan tradisi berpikir kritis, berakhlakul karimah, dan terjun langsung di tapak pergerakan.',
    ],
    icon: Sparkles,
  },
  {
    id: 'era-irm-1992',
    year: '1992',
    date: '18 November 1992',
    phase: '02',
    title: '1992 — Era Penyesuaian: Ikatan Remaja Muhammadiyah (IRM)',
    summary:
      'Regulasi keorganisasian pemuda Orde Baru memaksa penyesuaian nama IPM menjadi Ikatan Remaja Muhammadiyah (IRM) tanpa mengurangi ruh perjuangannya.',
    details: [
      'Penetapan nama IRM pada 18 November 1992 mengikuti aturan keorganisasian pemuda masa itu.',
      'Kaderisasi, kajian, dan aksi sosial tetap berjalan dari ranting hingga tingkat wilayah.',
      'Momen ini menjadi ujian kesinambungan identitas pelajar di dalam tubuh organisasi.',
    ],
    icon: ScrollText,
  },
  {
    id: 'restorasi-2008',
    year: '2008',
    date: '28 Oktober 2008',
    phase: '03',
    title: '2008 — Restorasi & Rebranding Kembali ke IPM',
    summary:
      'Semangat perubahan membawa IPM kembali hadir dengan nama aslinya — restorasi identitas dan rebranding yang menghidupkan kembali gerakan pelajar.',
    details: [
      'Pada 28 Oktober 2008, IPM kembali dipulihkan setelah periode panjang bernama IRM.',
      'Identitas, lambang, dan semangat kepelajaran diperbarui untuk menjawab tantangan zaman.',
      'Regenerasi muda kembali menemukan rumah ideologisnya dalam Ikatan Pelajar Muhammadiyah.',
    ],
    icon: Rocket,
  },
  {
    id: 'pw-sulteng-milenial',
    year: 'Kini',
    date: 'Era Milenial & Digital',
    phase: '04',
    title: 'Perkembangan PW IPM Sulawesi Tengah (Pelajar Tadulako)',
    summary:
      'Dari kaderisasi di kampus hingga era digital, PW IPM Sulawesi Tengah tumbuh bersama Pelajar Tadulako — mengusung semangat ilmu, dakwah, dan tapak pergerakan di Bumi Tadulako.',
    details: [
      'Memperkuat kaderisasi di kampus dan sekolah melalui kajian, literasi, dan aksi sosial.',
      'Memanfaatkan media digital untuk advokasi, dokumentasi, dan penyebaran gagasan kebaikan.',
      'Menjalin kolaborasi antar cabang se-Sulawesi Tengah dalam semangat ketadulakoan.',
    ],
    icon: Megaphone,
  },
]

/* ------------------------------------------------------------------
   COMPONENT
------------------------------------------------------------------- */

/**
 * Interactive visual timeline vertikal untuk halaman Sejarah IPM.
 *
 * - Mobile: rail kiri (border #7A2D61) dengan node berpendar.
 * - Desktop (md+): layout dua kolom berselang-seling, rail di tengah.
 * - Interaksi: hover mengangkat kartu, klik menetapkan fase aktif
 *   (kartu aktif ter-inversi menjadi magenta) dan membuka butir detail.
 */
export default function HistoryTimeline() {
  const [activeId, setActiveId] = useState<string>(MILESTONES[0].id)

  return (
    <ol className="relative list-none">
      {MILESTONES.map((milestone, index) => {
        const isActive = milestone.id === activeId
        /**
         * Di desktop (md+), item pertama (1961) tampil di sisi KIRI rail,
         * tepat di bawah judul "Empat Fase Perjalanan IPM", lalu berselang-seling:
         * Item 1 — Kiri, Item 2 — Kanan, Item 3 — Kiri, Item 4 — Kanan.
         */
        const isLeftSide = index % 2 === 0
        const Icon = milestone.icon

        return (
          <li
            key={milestone.id}
            className="group relative pb-12 pl-16 last:pb-0 md:grid md:grid-cols-2 md:gap-x-16 md:pb-16 md:pl-0"
          >
            {/* Segmen rail penghubung (berakhir tepat di node berikutnya) */}
            {index < MILESTONES.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute -bottom-2 left-6 top-10 w-1 -translate-x-1/2 bg-[#7A2D61] md:left-1/2"
              />
            )}

            {/* Node berpendar */}
            <span
              aria-hidden="true"
              className={`absolute left-6 top-2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center transition-all duration-300 md:left-1/2 ${BORDER} ${
                isActive
                  ? 'bg-[#CD0179] text-white shadow-[0_0_0_6px_rgba(205,1,121,0.25)]'
                  : 'bg-white text-[#7A2D61] shadow-[0_0_0_4px_rgba(122,45,97,0.15)] group-hover:bg-[#CD0179] group-hover:text-white group-hover:shadow-[0_0_0_6px_rgba(205,1,121,0.20)]'
              }`}
            >
              <Icon size={16} strokeWidth={2.5} />
            </span>

            {/* Kartu milestone */}
            <div
              className={`md:w-full ${
                isLeftSide ? 'md:col-start-1 md:justify-self-end' : 'md:col-start-2'
              }`}
            >
              <button
                type="button"
                onClick={() => setActiveId(milestone.id)}
                aria-expanded={isActive}
                aria-label={`Buka detail fase ${milestone.phase}: ${milestone.title}`}
                className={`w-full rounded-none p-5 text-left transition-all duration-300 md:p-6 ${SHADOW_ACTIVE} ${
                  isActive
                    ? 'bg-[#CD0179] text-white shadow-[6px_6px_0px_0px_#7A2D61] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0px_0px_#7A2D61]'
                    : `bg-white ${BORDER} ${SHADOW_CARD} ${SHADOW_HOVER}`
                }`}
              >
                {/* Baris atas: badge tahun + label fase */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span
                    className={`inline-block px-3 py-1 text-sm font-black uppercase tracking-wider ${BORDER} ${
                      isActive
                        ? 'bg-white text-[#CD0179] shadow-[3px_3px_0px_0px_#7A2D61]'
                        : 'bg-[#CD0179] text-white shadow-[3px_3px_0px_0px_#7A2D61]'
                    }`}
                  >
                    {milestone.year}
                  </span>
                  <span
                    className={`text-[11px] font-black uppercase tracking-[0.25em] ${
                      isActive ? 'text-white/80' : 'text-[#7A2D61]'
                    }`}
                  >
                    Fase {milestone.phase} / 04
                  </span>
                </div>

                {/* Tanggal */}
                <p
                  className={`mt-4 inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold ${BORDER} ${
                    isActive ? 'bg-black/20 text-white' : 'bg-[#FDF1FC] text-[#7A2D61]'
                  }`}
                >
                  <CalendarDays size={14} aria-hidden="true" />
                  {milestone.date}
                </p>

                {/* Judul */}
                <h3
                  className={`mt-4 text-lg font-black uppercase leading-snug md:text-xl ${
                    isActive ? 'text-white' : 'text-black'
                  }`}
                >
                  {milestone.title}
                </h3>

                {/* Ringkasan */}
                <p
                  className={`mt-3 text-sm font-medium leading-relaxed md:text-base ${
                    isActive ? 'text-white/90' : 'text-gray-700'
                  }`}
                >
                  {milestone.summary}
                </p>

                {/* Pemicu detail */}
                <span
                  className={`mt-4 inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest ${
                    isActive ? 'text-white' : 'text-[#CD0179]'
                  }`}
                >
                  {isActive ? 'Tutup Detail' : 'Lihat Detail'}
                  <ChevronRight
                    size={14}
                    aria-hidden="true"
                    className={`transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`}
                  />
                </span>

                {/* Butir detail (hanya saat kartu aktif) */}
                {isActive && (
                  <ul className="mt-4 space-y-2 border-t-2 border-dashed border-white/50 pt-4">
                    {milestone.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex gap-2 text-sm font-medium leading-relaxed text-white/90"
                      >
                        <span aria-hidden="true" className="mt-0.5 shrink-0 font-black">
                          ▸
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </button>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
