'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const divisions = [
  { id: 1, name: 'Badan Pengurus Harian', image: '/bph.jpg' },
  { id: 2, name: 'Bidang Organisasi', image: '/profil_bg.jpg' },
  { id: 3, name: 'Bidang Perkaderan', image: '/it.jpg' },
  { id: 4, name: 'Bidang Kajian Dakwah Islam (KDI)', image: '/kdi.jpg' },
  { id: 5, name: 'Bidang Pengarusutamaan Gender', image: '/profil_bg.jpg' },
  { id: 6, name: 'Bidang Seni Budaya', image: '/sb.jpg' },
  { id: 7, name: 'Bidang Advokasi & Kebijakan Publik', image: '/it.jpg' },
  { id: 8, name: 'Bidang Pengembangan Prestasi Olahraga', image: '/profil_bg.jpg' },
  { id: 9, name: 'Bidang Pengembangan Ilmu Pengetahuan', image: '/pip.jpg' },
  { id: 10, name: 'Bidang Lingkungan Hidup', image: '/sb.jpg' },
  { id: 11, name: 'Bidang Teknologi Informasi', image: '/it.jpg' },
  { id: 12, name: 'Bidang Ekonomi Kreatif', image: '/profil_bg.jpg' },
  { id: 13, name: 'Bidang Kesehatan', image: '/kdi.jpg' },
]

export default function DivisionSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % divisions.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + divisions.length) % divisions.length)
  }

  return (
    <div className="relative group w-full h-[400px] md:h-[500px] rounded-xl border-2 border-[#7A2D61] shadow-[4px_4px_0px_0px_#7A2D61] overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#7A2D61]">
      {/* Images */}
      {divisions.map((div, index) => (
        <div
          key={div.id}
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="relative w-full h-full bg-[#fce7f3]">
             <Image
                src={div.image}
                alt={div.name}
                fill
                className="object-cover"
             />
             <div className="absolute inset-0 bg-[#7A2D61]/30"></div>
          </div>
          
          {/* Caption Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#7A2D61]/90 backdrop-blur-sm text-white p-4">
            <h3 className="text-xl font-bold font-space-grotesk">{div.name}</h3>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -mt-6 z-20 w-12 h-12 flex items-center justify-center bg-[#CD0179] text-white border-2 border-white rounded-full shadow-[2px_2px_0px_0px_white] hover:bg-[#A90060] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -mt-6 z-20 w-12 h-12 flex items-center justify-center bg-[#CD0179] text-white border-2 border-white rounded-full shadow-[2px_2px_0px_0px_white] hover:bg-[#A90060] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-[72px] left-0 right-0 z-20 flex justify-center gap-2 px-4 flex-wrap">
        {divisions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#CD0179] ${
              index === currentIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
