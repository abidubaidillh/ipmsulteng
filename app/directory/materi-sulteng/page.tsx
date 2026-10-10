import type { Metadata } from 'next'
import { Download, FolderOpen } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Materi IPM SulTeng | PW IPM Sulawesi Tengah',
  description: 'Materi dan Dokumen Lokal PW IPM Sulawesi Tengah.',
}

const materials = [
  {
    title: 'Panduan Pelaksanaan Musyda',
    description: 'Panduan teknis dan tata tertib pelaksanaan Musyawarah Daerah IPM di lingkungan Sulawesi Tengah.',
    icon: FolderOpen,
    link: '#',
  },
  {
    title: 'Kajian Isu-Isu Pelajar Sulteng',
    description: 'Dokumen hasil kajian bidang PIP mengenai isu strategis pelajar di wilayah Sulawesi Tengah.',
    icon: FolderOpen,
    link: '#',
  },
  {
    title: 'Modul Pelatihan Jurnalistik',
    description: 'Bahan ajar pelatihan jurnalistik dasar yang diinisiasi oleh Bidang PIP PW IPM Sulteng.',
    icon: FolderOpen,
    link: '#',
  },
  {
    title: 'Laporan Pertanggungjawaban PW',
    description: 'Arsip publikasi Laporan Pertanggungjawaban (LPJ) PW IPM Sulawesi Tengah periode lalu.',
    icon: FolderOpen,
    link: '#',
  },
]

export default function MateriSultengPage() {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none text-black">
        <h2 className="text-3xl font-black uppercase border-b-4 border-black pb-4 mb-4">Materi IPM Sulawesi Tengah</h2>
        <p className="font-medium">
          Kumpulan materi, panduan, dan dokumen lokal yang diterbitkan khusus oleh Pimpinan Wilayah Ikatan Pelajar Muhammadiyah Sulawesi Tengah. 
          Dokumen ini ditujukan sebagai referensi bagi seluruh kader di wilayah Sulawesi Tengah.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {materials.map((item, index) => {
          const Icon = item.icon
          return (
            <div key={index} className="bg-white border-4 border-black p-6 flex flex-col h-full hover:-translate-y-2 hover:shadow-[4px_4px_0px_0px_#CD0179] transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-[#FFF4FA] border-2 border-black rounded-full">
                  <Icon className="w-6 h-6 text-[#CD0179]" />
                </div>
                <h3 className="text-xl font-black text-black leading-tight">{item.title}</h3>
              </div>
              <p className="text-gray-700 font-medium mb-6 flex-grow">{item.description}</p>
              <Link 
                href={item.link}
                className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold py-3 px-4 border-2 border-transparent hover:bg-[#CD0179] hover:border-black transition-colors w-full"
              >
                <Download className="w-5 h-5" />
                <span>Unduh Dokumen</span>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

