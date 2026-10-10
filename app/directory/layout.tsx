import type { Metadata } from 'next'
import DirectoryTabs from '@/components/directory/DirectoryTabs'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Direktori | PW IPM Sulawesi Tengah',
  description: 'Sistem Direktori PW IPM Sulawesi Tengah',
}

export default function DirectoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#FDFDFD] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm font-bold text-black mb-8">
          <Link href="/" className="hover:text-[#CD0179] hover:underline transition-colors">
            Beranda
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span>Direktori</span>
        </nav>

        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-black mb-8 uppercase text-black">
          Direktori IPM
        </h1>

        {/* Tab System */}
        <div className="flex flex-col gap-4">
          <DirectoryTabs />
          
          {/* Main Content Panel */}
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] p-6 md:p-8 lg:p-10 z-10 w-full relative">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
