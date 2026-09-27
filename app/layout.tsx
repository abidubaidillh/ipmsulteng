import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })

/**
 * Basis URL absolut untuk metadata (Open Graph, canonical, dst).
 *
 * Di Vercel, `VERCEL_PROJECT_PRODUCTION_URL` tersedia otomatis saat build
 * sehingga domain produksi tidak perlu ditulis manual. Override manual
 * dilakukan lewat environment variable `NEXT_PUBLIC_SITE_URL`.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
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
