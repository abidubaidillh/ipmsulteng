import type { Metadata } from 'next'
import { BookOpen, Download } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pedoman IPM | PW IPM Sulawesi Tengah',
  description: 'Pedoman, landasan hukum, dan adtartib Ikatan Pelajar Muhammadiyah.',
}

const materials = [
  {
    title: 'Anggaran Dasar (AD) IPM',
    description: 'Dokumen pokok yang memuat asas, tujuan, dan prinsip dasar organisasi Ikatan Pelajar Muhammadiyah.',
    icon: BookOpen,
    link: '#',
  },
  {
    title: 'Anggaran Rumah Tangga (ART) IPM',
    description: 'Aturan lebih lanjut dan penjabaran detail dari Anggaran Dasar yang mengatur operasional organisasi.',
    icon: BookOpen,
    link: '#',
  },
  {
    title: 'Pedoman Administrasi Kesekretariatan',
    description: 'Panduan tata kelola surat-menyurat, stempel, dan kearsipan dalam organisasi IPM dari pusat hingga ranting.',
    icon: BookOpen,
    link: '#',
  },
  {
    title: 'Pedoman Administrasi Keuangan',
    description: 'Standar pengelolaan keuangan, pencatatan kas, dan pelaporan dana di lingkungan Ikatan Pelajar Muhammadiyah.',
    icon: BookOpen,
    link: '#',
  },
]

export default function PedomanIpmPage() {
  return (
    <div className="space-y-8">
      <div className="prose prose-lg max-w-none text-black">
        <h2 className="text-3xl font-black uppercase border-b-4 border-black pb-4 mb-4">Pedoman Organisasi IPM</h2>
        <p className="font-medium">
          Landasan hukum, AD/ART, dan prinsip penyelenggaraan organisasi yang berlaku bagi seluruh kader IPM. 
          Dokumen ini menjadi rujukan utama dalam menjalankan roda organisasi di setiap tingkatan pimpinan.
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

