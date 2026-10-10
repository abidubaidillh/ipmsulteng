import type { Metadata } from 'next'
import { Book, Download, FileText } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Materi IPM | PW IPM Sulawesi Tengah',
  description: 'Materi dan Modul Perkaderan Ikatan Pelajar Muhammadiyah.',
}

const materials = [
  {
    title: 'Modul Taruna Melati I',
    description: 'Buku panduan dan materi dasar perkaderan Taruna Melati I untuk tingkat Ranting dan Cabang.',
    icon: Book,
    link: '#',
  },
  {
    title: 'Modul Taruna Melati II',
    description: 'Panduan perkaderan Taruna Melati II yang difokuskan pada pembentukan kepemimpinan menengah.',
    icon: Book,
    link: '#',
  },
  {
    title: 'Materi Ke-IPM-an',
    description: 'Pemahaman komprehensif mengenai sejarah, identitas, dan arah gerak Ikatan Pelajar Muhammadiyah.',
    icon: FileText,
    link: '#',
  },
  {
    title: 'Materi Ke-Muhammadiyahan',
    description: 'Sejarah perjuangan K.H. Ahmad Dahlan dan nilai-nilai dasar pergerakan Muhammadiyah.',
    icon: FileText,
    link: '#',
  },
]

export default function MateriIpmPage() {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none text-black">
        <h2 className="text-3xl font-black uppercase border-b-4 border-black pb-4 mb-4">Materi Perkaderan IPM</h2>
        <p className="font-medium">
          Berikut adalah kumpulan materi dan modul standar perkaderan Ikatan Pelajar Muhammadiyah secara nasional. 
          Silakan akses dan unduh materi yang dibutuhkan untuk mendukung proses perkaderan di pimpinan masing-masing.
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

