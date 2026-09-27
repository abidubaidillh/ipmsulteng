'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Search } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <nav className="sticky top-0 z-50 bg-[#CD0179] border-b-2 border-dark-magenta" style={{ backgroundColor: '#CD0179' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Branding */}
          <Link href="/" className="flex items-center gap-3 shrink-0 font-bold text-lg">
            <div className="flex items-center shrink-0">
              <Image
                src="/Logo_Kabinet.jpeg"
                alt="Cabinet Logo"
                height={40}
                width={40}
                className="h-9 md:h-10 w-auto object-contain"
                priority
              />
            </div>
             <div className="hidden sm:flex flex-col justify-center shrink-0 min-w-0">
              <p className="text-xs md:text-sm font-bold text-white whitespace-nowrap leading-tight">Ikatan Pelajar Muhammadiyah</p>
              <p className="text-[10px] md:text-xs font-semibold text-white/90 whitespace-nowrap leading-tight uppercase tracking-wider">Sulawesi Tengah</p>
            </div>
          </Link>

           {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="relative px-1 py-2 font-medium text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#F1A4D9] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">
              Beranda
            </Link>

            {/* Profile Dropdown */}
            <div className="relative group">
              <Link href="/profile" className="flex items-center gap-1 relative px-1 py-2 font-medium text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#F1A4D9] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-200">
                Profil
                <ChevronDown size={18} className="text-white group-hover:text-[#F1A4D9] transition-colors duration-150" />
              </Link>
              <div className="absolute left-0 mt-0 w-48 bg-white border-2 border-primary-magenta shadow-neo-lg rounded-lg opacity-0 group-hover:opacity-100 visibility-hidden group-hover:visibility-visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <Link
                  href="/profile/sejarah"
                  className="block px-4 py-3 transition-colors duration-200 text-ipm-dark hover:text-primary-magenta hover:bg-off-white border-b border-gray-200 font-medium"
                >
                  Sejarah IPM
                </Link>
                <Link
                  href="/profile/sulteng"
                  className="block px-4 py-3 transition-colors duration-200 text-ipm-dark hover:text-primary-magenta hover:bg-off-white font-medium rounded-b-lg"
                >
                  Profil IPM Sulteng
                </Link>
              </div>
            </div>

            {/* Directory Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 relative px-1 py-2 font-medium text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#F1A4D9] after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-200">
                Direktori
                <ChevronDown size={18} className="text-white group-hover:text-[#F1A4D9] transition-colors duration-150" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border-2 border-primary-magenta shadow-neo-lg rounded-lg opacity-0 group-hover:opacity-100 visibility-hidden group-hover:visibility-visible transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <Link
                  href="/directory/mars-ipm"
                  className="block px-4 py-3 transition-colors duration-200 text-ipm-dark hover:text-primary-magenta hover:bg-off-white border-b border-gray-200 font-medium"
                >
                  Mars IPM
                </Link>
                <Link
                  href="/directory/pedoman-ipm"
                  className="block px-4 py-3 transition-colors duration-200 text-ipm-dark hover:text-primary-magenta hover:bg-off-white border-b border-gray-200 font-medium"
                >
                  Pedoman IPM
                </Link>
                <Link
                  href="/directory/materi-ipm"
                  className="block px-4 py-3 transition-colors duration-200 text-ipm-dark hover:text-primary-magenta hover:bg-off-white border-b border-gray-200 font-medium"
                >
                  Materi IPM
                </Link>
                <Link
                  href="/directory/materi-sulteng"
                  className="block px-4 py-3 transition-colors duration-200 text-ipm-dark hover:text-primary-magenta hover:bg-off-white font-medium rounded-b-lg"
                >
                  Materi IPM SulTeng
                </Link>
              </div>
            </div>
            <Link href="/administration" className="relative px-1 py-2 font-medium text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#F1A4D9] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">
              Administrasi
            </Link>
            <Link href="/news" className="relative px-1 py-2 font-medium text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#F1A4D9] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200">
              Berita
            </Link>

            {/* Expandable Search Input */}
            <div className="flex items-center">
              <div className="flex items-center gap-1 group relative">
                <input
                  type="text"
                  placeholder="Cari warta / materi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      window.location.href = `/news?search=${encodeURIComponent(searchQuery)}`
                    }
                  }}
                  className="w-0 md:group-hover:w-48 md:group-focus-within:w-48 opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 overflow-hidden transition-all duration-300 ease-in-out border-2 border-white rounded-md bg-white px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-light-pink focus:border-light-pink transition-all placeholder-gray-400"
                />
                <button
                  onClick={() => {
                    if (searchQuery.trim()) {
                      window.location.href = `/news?search=${encodeURIComponent(searchQuery)}`
                    }
                  }}
                  className="p-2 text-white hover:text-[#F1A4D9] rounded-md transition-colors duration-200 shrink-0"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-dark-magenta bg-bright-magenta">
            <div className="px-4 py-4 space-y-2">
              <Link href="/" className="block relative px-3 py-2 font-medium text-white border-l-4 border-transparent hover:border-l-[#F1A4D9] pl-3 transition-colors duration-200">
                Home
              </Link>

              {/* Mobile Profile Dropdown */}
              <div>
                <div className="flex items-center justify-between w-full relative">
                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-3 py-2 font-medium text-white border-l-4 border-transparent hover:border-l-[#F1A4D9] transition-colors duration-200"
                  >
                    Profil
                  </Link>
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="px-4 py-2"
                  >
                    <ChevronDown size={18} className={`text-white transition-colors duration-150 ${isProfileOpen ? 'text-[#F1A4D9]' : 'text-white'}`} />
                  </button>
                </div>
                {isProfileOpen && (
                  <div className="ml-4 space-y-1 mt-2 border-l-2 border-light-pink pl-3">
                    <Link href="/profile/sejarah" className="block relative px-3 py-2 font-medium text-white border-l-4 border-transparent hover:border-l-[#F1A4D9] pl-3 transition-colors duration-200">
                      Sejarah IPM
                    </Link>
                    <Link href="/profile/sulteng" className="block relative px-3 py-2 font-medium text-white border-l-4 border-transparent hover:border-l-[#F1A4D9] pl-3 transition-colors duration-200">
                      Profil IPM Sulteng
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Directory Dropdown */}
              <div>
                <button
                  onClick={() => setIsDirectoryOpen(!isDirectoryOpen)}
                  className="flex items-center justify-between w-full relative px-3 py-2 font-medium text-white border-l-4 border-transparent group-hover:border-l-[#F1A4D9] transition-colors duration-200"
                >
                  Direktori
                  <ChevronDown size={18} className={`text-white transition-colors duration-150 ${isDirectoryOpen ? 'text-[#F1A4D9]' : 'text-white'}`} />
                </button>
                {isDirectoryOpen && (
                  <div className="ml-4 space-y-1 mt-2 border-l-2 border-light-pink pl-3">
                    <Link href="/directory/mars-ipm" className="block relative px-3 py-2 font-medium text-white border-l-4 border-transparent hover:border-l-[#F1A4D9] pl-3 transition-colors duration-200">
                      Mars IPM
                    </Link>
                    <Link href="/directory/pedoman-ipm" className="block relative px-3 py-2 font-medium text-white border-l-4 border-transparent hover:border-l-[#F1A4D9] pl-3 transition-colors duration-200">
                      Pedoman IPM
                    </Link>
                    <Link href="/directory/materi-ipm" className="block relative px-3 py-2 font-medium text-white border-l-4 border-transparent hover:border-l-[#F1A4D9] pl-3 transition-colors duration-200">
                      Materi IPM
                    </Link>
                    <Link href="/directory/materi-sulteng" className="block relative px-3 py-2 font-medium text-white border-l-4 border-transparent hover:border-l-[#F1A4D9] pl-3 transition-colors duration-200">
                      Materi IPM SulTeng
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/administration" className="block relative px-3 py-2 font-medium text-white border-l-4 border-transparent hover:border-l-[#F1A4D9] pl-3 transition-colors duration-200">
                Administrasi
              </Link>
              <Link href="/news" className="block relative px-3 py-2 font-medium text-white border-l-4 border-transparent hover:border-l-[#F1A4D9] pl-3 transition-colors duration-200">
                Berita
              </Link>

              {/* Mobile Search Input */}
              <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Cari warta / materi..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && searchQuery.trim()) {
                        window.location.href = `/news?search=${encodeURIComponent(searchQuery)}`
                      }
                    }}
                    className="flex-1 border-2 border-white rounded-md bg-white px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-light-pink focus:border-light-pink transition-all placeholder-gray-400"
                  />
                  <button
                    onClick={() => {
                      if (searchQuery.trim()) {
                        window.location.href = `/news?search=${encodeURIComponent(searchQuery)}`
                      }
                    }}
                    className="p-2 text-primary-magenta hover:text-dark-magenta rounded-md transition-colors duration-200"
                  >
                    <Search size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}