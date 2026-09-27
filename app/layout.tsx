import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

export const metadata: Metadata = {
  title: 'PW IPM Sulawesi Tengah | Pimpinan Wilayah Ikatan Pelajar Muhammadiyah',
  description: 'PW IPM Sulawesi Tengah - Organisasi pelajar Muhammadiyah yang berkomitmen untuk kemajuan pendidikan dan kepemimpinan Islam di Sulawesi Tengah.',
  keywords: 'IPM, Ikatan Pelajar Muhammadiyah, Sulawesi Tengah, Pelajar, Organisasi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="font-sans bg-ipm-bg">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
