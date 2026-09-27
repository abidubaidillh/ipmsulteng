import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Share2, Send, MessageCircle } from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Profile', href: '/profile/sulteng' },
  { label: 'Directory', href: '/directory' },
  { label: 'News', href: '/news' },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: '#', Icon: Share2 },
  { label: 'Instagram', href: '#', Icon: MessageCircle },
  { label: 'Twitter', href: '#', Icon: Send },
]

/** Section heading, bumped for legibility on small screens. */
const HEADING = 'mb-2 text-sm font-extrabold text-white md:text-base'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-4 border-deep-purple bg-primary-magenta">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-12 lg:px-8">
        {/* Single column on phones, 2-up on large phones/small tablets, 4 on md+ */}
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Organization Info with Logo */}
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
                <h3 className="text-sm font-extrabold leading-tight text-white md:text-base">
                  Ikatan Pelajar Muhammadiyah
                </h3>
                <p className="text-xs font-semibold uppercase leading-tight tracking-wider text-off-white md:text-sm">
                  Sulawesi Tengah
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-off-white md:text-base">
              Pimpinan Wilayah IPM Sulawesi Tengah 2024&ndash;2026
            </p>
          </div>

          {/* Quick Links - 44px tap rows instead of bare inline anchors */}
          <nav aria-label="Tautan cepat">
            <h4 className={HEADING}>Quick Links</h4>
            <ul className="-ml-3 flex flex-col text-sm text-off-white md:text-base">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex min-h-[44px] items-center rounded-lg px-3 transition-colors duration-200 hover:bg-off-white/10 hover:text-light-pink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info - min-w-0 + break-words prevent overflow on long strings */}
          <div>
            <h4 className={HEADING}>Contact</h4>
            <ul className="space-y-1 text-sm text-off-white md:text-base">
              <li className="flex items-start gap-2 py-1.5">
                <MapPin
                  size={18}
                  className="mt-0.5 flex-shrink-0 text-light-pink"
                  aria-hidden="true"
                />
                <span className="min-w-0 break-words">
                  Palu, Sulawesi Tengah, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-2 py-1.5">
                <Mail
                  size={18}
                  className="flex-shrink-0 text-light-pink"
                  aria-hidden="true"
                />
                <a
                  href="mailto:info@ipm-sulteng.org"
                  className="min-w-0 break-words transition-colors duration-200 hover:text-light-pink"
                >
                  info@ipm-sulteng.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media - 44px targets, wraps instead of overflowing */}
          <div>
            <h4 className={HEADING}>Follow Us</h4>
            <ul className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border-2 border-deep-purple bg-off-white shadow-[2px_2px_0px_0px_#7A2D61] transition-colors duration-200 hover:bg-light-pink"
                  >
                    <Icon
                      size={20}
                      className="text-primary-magenta"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-deep-purple/40 pt-6 md:pt-8">
          <p className="text-center text-sm font-medium text-off-white md:text-base">
            &copy; {currentYear} PW IPM Sulawesi Tengah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
