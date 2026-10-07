import Link from 'next/link'
import Image from 'next/image'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Profile', href: '/profile/sulteng' },
  { label: 'Directory', href: '/directory' },
  { label: 'News', href: '/news' },
  { label: 'Agenda', href: '/agenda' },
  { label: 'Administration', href: '/administration' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-black bg-primary-magenta">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 md:py-8 lg:px-8">
        <div className="mb-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
          {/* About Us */}
          <div>
            <div className="mb-4 flex items-start gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden">
                <Image
                  src="/Logo_Kabinet.jpeg"
                  alt="Logo PW IPM Sulawesi Tengah"
                  height={48}
                  width={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex min-w-0 flex-col justify-center">
                <p className="text-sm font-extrabold leading-tight text-white md:text-base">
                  Ikatan Pelajar Muhammadiyah
                </p>
                <p className="text-xs font-semibold uppercase leading-tight tracking-wider text-off-white md:text-sm">
                  Sulawesi Tengah
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-off-white md:text-base">
              Pimpinan Wilayah IPM Sulawesi Tengah 2024&ndash;2026.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Tautan cepat">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-off-white md:text-base">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-[44px] items-center rounded-lg transition-colors duration-200 hover:text-light-pink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-black/20 pt-6">
          <p className="w-full text-center text-sm font-medium text-off-white md:text-base">
            &copy; 2026 PW IPM Sulawesi Tengah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
