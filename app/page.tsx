import Link from 'next/link'
import Image from 'next/image'
import StatsSection from '@/components/StatsSection'
import LatestUpdatesSection from '@/components/LatestUpdatesSection'
import AnnouncementsAgendaSection from '@/components/AnnouncementsAgendaSection'

export default function Home() {
  return (
    <>
      {/* Hero Section with Background */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 -z-20 blur-[1.5px]">
          <Image
            src="/mr.jpg"
            alt="Kota Palu Sulawesi Tengah"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Dark Charcoal Base Overlay */}
        <div className="absolute inset-0 -z-10 bg-[#18181B]/55" />

        {/* Subtle Gradient Accent - Dark Magenta to Charcoal */}
        <div className="absolute inset-0 -z-9 bg-gradient-to-b from-[#4A012C]/35 via-transparent to-[#18181B]/60" />

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full relative z-10 pb-8 md:pb-12">
          <div className="flex items-center justify-center">
            {/* Center Content */}
            <div className="space-y-6 max-w-2xl w-full text-center">
              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug drop-shadow-lg">
                <span className="inline-block bg-[#CD0179] text-white font-black uppercase tracking-wide border-2 border-[#7A2D61] shadow-[3px_3px_0px_0px_#7A2D61] px-4 py-2">
                  Pelajar Tadulako
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#FDF1FC] font-semibold leading-relaxed tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-xl mx-auto">
                Gerakan pelajar Muhammadiyah Sulawesi Tengah untuk literasi, kepemimpinan Islami, dan kemajuan pendidikan.
              </p>
            </div>
          </div>

          {/* Interactive Cards - Positioned with Distinct Distance */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl mx-auto mt-16 md:mt-24">
            {/* Card 1: Profil */}
            <Link
              href="/profile"
              className="group relative overflow-hidden h-40 md:h-44 rounded-none border-2 border-[#7A2D61] shadow-[4px_4px_0px_0px_#7A2D61] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#7A2D61] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-300 cursor-pointer"
              style={{
                backgroundImage: 'url(/profil_bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-end p-4 md:p-5">
                <h3 className="text-xl md:text-2xl font-bold text-white">Profil</h3>
              </div>
            </Link>

            {/* Card 2: Berita */}
            <Link
              href="/news"
              className="group relative overflow-hidden h-40 md:h-44 rounded-none border-2 border-[#7A2D61] shadow-[4px_4px_0px_0px_#7A2D61] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#7A2D61] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-300 cursor-pointer"
              style={{
                backgroundImage: 'url(/berita_bg.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-end p-4 md:p-5">
                <h3 className="text-xl md:text-2xl font-bold text-white">Berita</h3>
              </div>
            </Link>

            {/* Card 3: Agenda & Informasi */}
            <Link
              href="/agenda"
              className="group relative overflow-hidden h-40 md:h-44 rounded-none border-2 border-[#7A2D61] shadow-[4px_4px_0px_0px_#7A2D61] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#7A2D61] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-300 cursor-pointer"
              style={{
                backgroundImage: 'url(/agenda_bg.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-end p-4 md:p-5">
                <h3 className="text-xl md:text-2xl font-bold text-white whitespace-nowrap overflow-hidden text-ellipsis">Agenda & Info</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Pembaruan Terbaru Section */}
      <LatestUpdatesSection />

      {/* Pengumuman & Agenda Section */}
      <AnnouncementsAgendaSection />

      {/* Pelajar Muhammadiyah Sulawesi Tengah Dalam Angka Section */}
      <StatsSection />
    </>
  )
}