'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { name: 'Mars & Hymne IPM', href: '/directory/mars-ipm' },
  { name: 'Materi IPM', href: '/directory/materi-ipm' },
  { name: 'Materi Sulteng', href: '/directory/materi-sulteng' },
  { name: 'Pedoman IPM', href: '/directory/pedoman-ipm' },
]

export default function DirectoryTabs() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col md:flex-row gap-2 z-20 relative">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href || pathname.startsWith(tab.href + '/')
        return (
          <Link
            key={tab.name}
            href={tab.href}
            scroll={false}
            className={`
              flex-1 px-4 py-3 md:py-4 font-black text-center text-sm md:text-base transition-all duration-200 border-4 border-black
              ${isActive 
                ? 'bg-[#CD0179] text-white shadow-[4px_4px_0px_0px_#000] translate-y-0' 
                : 'bg-white text-black hover:-translate-y-1 hover:bg-[#CD0179]/10'
              }
            `}
          >
            {tab.name}
          </Link>
        )
      })}
    </div>
  )
}
