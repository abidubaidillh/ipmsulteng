import Link from 'next/link';
import Image from 'next/image';
import { Target, Eye, Heart } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#FDF1FC] pb-24">
      {/* Header Section */}
      <section className="relative pt-24 pb-12 md:pb-16 overflow-hidden bg-[#18181B]">
        {/* Background Image with Blur */}
        <Image
          src="/profile_bg.JPG"
          alt="Profile Background"
          fill
          priority
          className="object-cover object-center blur-[1.5px] z-0"
        />

        {/* Base Tint & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A012C]/80 via-[#4A012C]/40 to-[#18181B]/90 z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="flex flex-col gap-6 max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm font-bold text-gray-300">
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
              <span>/</span>
              <span className="text-white">Profile</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-snug drop-shadow-lg flex flex-col items-start gap-4">
              <span className="inline-block bg-[#CD0179] text-white font-black uppercase tracking-wide border-2 border-[#7A2D61] shadow-[3px_3px_0px_0px_#7A2D61] px-4 py-2">
                Profil IPM
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-medium text-white leading-relaxed border-l-4 border-[#CD0179] pl-6 bg-black/20 py-2">
              Ikatan Pelajar Muhammadiyah adalah inkubator generasi unggul yang mengakar pada nilai luhur ketadulakoan: berani, jujur, tangguh, dan beretika. Kami berkomitmen membentuk pemimpin masa depan yang berdaya saing global dengan kebijaksanaan lokal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col gap-16">
        
        {/* Sub-route Navigation Cards Grid */}
        <section>
          <h2 className="text-3xl font-black text-black uppercase mb-8">
            Eksplorasi Profil
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Sejarah & Perjalanan */}
            <div className="bg-white border-2 border-[#7A2D61] p-8 shadow-[4px_4px_0px_0px_#7A2D61] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#7A2D61] transition-all flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CD0179] rounded-bl-full -z-0 opacity-10 group-hover:opacity-20 transition-opacity border-l-2 border-b-2 border-[#7A2D61]"></div>
              
              <div className="relative z-10 flex-grow flex flex-col items-start">
                <h3 className="text-2xl font-black text-black uppercase mb-4 group-hover:text-[#7A2D61] transition-colors">
                  Sejarah & Perjalanan
                </h3>
                <p className="text-lg font-medium text-gray-700 mb-8">
                  Telusuri jejak langkah berdirinya Ikatan Pelajar Muhammadiyah, dari gagasan awal hingga bertransformasi menjadi wadah pergerakan pelajar yang inspiratif.
                </p>
              </div>

              <Link 
                href="/profile/sejarah" 
                className="mt-auto bg-black text-white px-6 py-4 font-black uppercase tracking-wider flex items-center justify-between border-2 border-[#7A2D61] shadow-[4px_4px_0px_0px_#7A2D61] hover:bg-[#7A2D61] hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#7A2D61] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all relative z-10 w-full text-center group/btn"
              >
                <span>Baca Sejarah</span>
                <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
              </Link>
            </div>

            {/* Card 2: Profil IPM SulTeng */}
            <div className="bg-white border-2 border-[#7A2D61] p-8 shadow-[4px_4px_0px_0px_#7A2D61] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#7A2D61] transition-all flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CD0179] rounded-bl-full -z-0 opacity-10 group-hover:opacity-20 transition-opacity border-l-2 border-b-2 border-[#7A2D61]"></div>
              
              <div className="relative z-10 flex-grow flex flex-col items-start">
                <h3 className="text-2xl font-black text-black uppercase mb-4 group-hover:text-[#7A2D61] transition-colors">
                  Profil IPM SulTeng
                </h3>
                <p className="text-lg font-medium text-gray-700 mb-8">
                  Kenali tim regional kami, program-program lokal unggulan, dan dampak nyata yang telah diciptakan Pelajar Tadulako di Bumi Tadulako.
                </p>
              </div>

              <Link 
                href="/profile/sulteng" 
                className="mt-auto bg-[#7A2D61] text-white px-6 py-4 font-black uppercase tracking-wider flex items-center justify-between border-2 border-[#7A2D61] shadow-[4px_4px_0px_0px_#7A2D61] hover:bg-black hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_#7A2D61] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all relative z-10 w-full text-center group/btn"
              >
                <span>Lihat Profil Sulteng</span>
                <span className="group-hover/btn:translate-x-2 transition-transform">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Organization Overview */}
        <section className="bg-white border-2 border-[#7A2D61] p-8 md:p-12 shadow-[4px_4px_0px_0px_#7A2D61] relative">
          <h2 className="text-3xl font-black text-black uppercase mb-12 text-center mt-4">Nilai - Nilai Organisasi</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Visi */}
            <div className="bg-white border-2 border-[#7A2D61] p-6 shadow-[4px_4px_0px_0px_#7A2D61] relative mt-6 md:mt-0">
              <div className="absolute -top-6 -left-6 bg-[#7A2D61] text-white p-3 border-2 border-[#7A2D61] shadow-[3px_3px_0px_0px_#7A2D61]">
                <Eye size={24} />
              </div>
              <h3 className="text-xl font-black text-black uppercase mb-3 mt-4">Visi</h3>
              <p className="text-base font-medium text-gray-700">
                Mewujudkan generasi muda Sulawesi Tengah yang berintegritas, cerdas, dan tangguh berlandaskan nilai-nilai ketadulakoan guna menyongsong peradaban emas.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white border-2 border-[#7A2D61] p-6 shadow-[4px_4px_0px_0px_#7A2D61] relative mt-6 md:mt-0">
              <div className="absolute -top-6 -left-6 bg-[#CD0179] text-white p-3 border-2 border-[#7A2D61] shadow-[3px_3px_0px_0px_#7A2D61]">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-black text-black uppercase mb-3 mt-4">Misi</h3>
              <ul className="text-base font-medium text-gray-700 space-y-2 list-disc list-inside">
                <li>Mengoptimalkan potensi akademik dan kepemimpinan.</li>
                <li>Menanamkan karakter kejujuran dan keberanian.</li>
                <li>Membangun kolaborasi strategis antar pelajar.</li>
              </ul>
            </div>

            {/* Nilai Utama */}
            <div className="bg-white border-2 border-[#7A2D61] p-6 shadow-[4px_4px_0px_0px_#7A2D61] relative mt-6 md:mt-0">
              <div className="absolute -top-6 -left-6 bg-slate-900 text-white p-3 border-2 border-[#7A2D61] shadow-[3px_3px_0px_0px_#7A2D61]">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-black text-black uppercase mb-3 mt-4">Nilai Utama</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-slate-900 text-white px-3 py-1 text-sm font-bold border-2 border-[#7A2D61] shadow-[3px_3px_0px_0px_#7A2D61]">BERANI</span>
                <span className="bg-[#7A2D61] text-white px-3 py-1 text-sm font-bold border-2 border-[#7A2D61] shadow-[3px_3px_0px_0px_#7A2D61]">JUJUR</span>
                <span className="bg-[#CD0179] text-white px-3 py-1 text-sm font-bold border-2 border-[#7A2D61] shadow-[3px_3px_0px_0px_#7A2D61]">TANGGUH</span>
                <span className="bg-white text-black px-3 py-1 text-sm font-bold border-2 border-[#7A2D61] shadow-[3px_3px_0px_0px_#7A2D61]">BERETIKA</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}