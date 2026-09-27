'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function LatestUpdatesSection() {
  const updates = [
    {
      id: 1,
      title: 'Jokowi Resmi Buka Muktamar IPM di Deli Serdang Sumut',
      category: 'Berita',
      categoryColor: 'bg-[#CD0179]/20 text-[#CD0179] border border-[#CD0179]',
      date: '25 Sep 2026',
      image: '/berita_img.jpeg',
      excerpt: 'IPM Sulawesi Tengah meluncurkan program literasi digital...',
    },
    {
      id: 2,
      title: 'Era Baru IPM Sulteng, PW IPM Periode 2026–2028 Dikukuhkan',
      category: 'Agenda',
      categoryColor: 'bg-amber-100 text-amber-800 border border-amber-300',
      date: 'Agenda: 10 Okt 2026',
      image: '/profil_img.JPG',
      excerpt: 'Workshop intensif 3 hari membahas kepemimpinan modern...',
    },
    {
      id: 3,
      title: 'Pengumuman Seleksi Berkas Peserta',
      category: 'Pengumuman',
      categoryColor: 'bg-blue-100 text-blue-700 border border-blue-300',
      date: '23 Sep 2026',
      image: '/pengumuman_img.png',
      excerpt: 'Kesempatan emas bagi kader menunjukkan kemampuan menulis...',
    },
    {
      id: 4,
      title: 'Pelantikan Pengurus IPM Cabang Palu Resmi Diadakan',
      category: 'Berita',
      categoryColor: 'bg-[#CD0179]/20 text-[#CD0179] border border-[#CD0179]',
      date: '20 Sep 2026',
      image: '/berita_img.jpeg',
      excerpt: 'Suasana meriah mendampingi pengurus baru Cabang Palu...',
    },
    {
      id: 5,
      title: 'Seminar Kepemimpinan Perempuan IPM - Daftar Sekarang',
      category: 'Agenda',
      categoryColor: 'bg-amber-100 text-amber-800 border border-amber-300',
      date: 'Agenda: 5 Okt 2026',
      image: '/profil_img.JPG',
      excerpt: 'Program mentoring intensif untuk kader perempuan...',
    },
    {
      id: 6,
      title: 'Hasil Kompetisi Debat Nasional IPM Tertanggal 15 Sep',
      category: 'Pengumuman',
      categoryColor: 'bg-blue-100 text-blue-700 border border-blue-300',
      date: '18 Sep 2026',
      image: '/pengumuman_img.png',
      excerpt: 'Tim Sulawesi Tengah berhasil lolos ke babak semifinal...',
    },
  ]

  return (
    <section className="py-16 bg-[#FDF1FC] px-4 md:px-8 border-b-2 border-[#7A2D61] relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary-magenta/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-ipm-yellow/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Center Aligned */}
        <div className="mb-12 text-center flex flex-col items-center mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#7A2D61] mb-2">
            Pembaruan Terbaru
          </h2>
          <p className="text-slate-700 max-w-2xl">
            Info terbaru PW IPM Sulawesi Tengah
          </p>
        </div>

        {/* Content Cards Grid - 2x3 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 my-8">
          {updates.map((update) => (
            <Link
              key={update.id}
              href={`/news/${update.id}`}
              className="group bg-white border-2 border-[#7A2D61] shadow-[3px_3px_0px_0px_#7A2D61] hover:-translate-y-1 transition-all duration-300 overflow-hidden rounded-lg"
            >
              {/* Image/Thumbnail - Compact */}
              <div className="relative h-28 md:h-32 w-full overflow-hidden bg-gradient-to-br from-primary-magenta/10 via-slate-100 to-ipm-yellow/10 flex items-center justify-center border-b-2 border-[#7A2D61]">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>

              {/* Card Content - Compact */}
              <div className="p-3.5 space-y-1.5">
                {/* Category Badge */}
                <div className={`inline-block px-2.5 py-0.5 text-xs font-bold rounded ${update.categoryColor}`}>
                  {update.category}
                </div>

                {/* Date & Metadata */}
                <p className="text-xs text-slate-600">
                  {update.date}
                </p>

                {/* Title */}
                <h3 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-[#CD0179] transition-colors line-clamp-2">
                  {update.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-slate-600 line-clamp-2">
                  {update.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Button */}
        <div className="flex justify-center pt-6">
          <Link
            href="/news"
            className="bg-[#CD0179] text-white font-bold px-6 py-3 rounded-lg border-2 border-[#7A2D61] shadow-[4px_4px_0px_0px_#7A2D61] hover:bg-[#B01171] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all duration-200 inline-flex items-center justify-center gap-2"
          >
            Lihat Informasi Lainnya
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
