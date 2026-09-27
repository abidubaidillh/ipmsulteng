import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Share2, Send, MessageCircle, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#CD0179] border-t-4 border-[#7A2D61]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-6">
          {/* Organization Info with Logo */}
          <div>
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 flex-shrink-0 overflow-hidden flex items-center justify-center">
                <Image
                  src="/Logo_Kabinet.jpeg"
                  alt="Cabinet Logo"
                  height={48}
                  width={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-xs md:text-sm font-extrabold text-white leading-tight">Ikatan Pelajar Muhammadiyah</h3>
                <p className="text-[10px] md:text-xs font-semibold text-[#FDF1FC] uppercase tracking-wider leading-tight">Sulawesi Tengah</p>
              </div>
            </div>
            <p className="text-[#FDF1FC] text-sm leading-tight">
              Pimpinan Wilayah IPM Sulawesi Tengah 2024-2026
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-extrabold text-white mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-1.5 text-sm text-[#FDF1FC]">
              <li><Link href="/" className="hover:text-[#F1A4D9] transition-colors">Home</Link></li>
              <li><Link href="/profile/sulteng" className="hover:text-[#F1A4D9] transition-colors">Profile</Link></li>
              <li><Link href="/directory" className="hover:text-[#F1A4D9] transition-colors">Directory</Link></li>
              <li><Link href="/news" className="hover:text-[#F1A4D9] transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-extrabold text-white mb-3 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm text-[#FDF1FC]">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-[#F1A4D9] flex-shrink-0" />
                <span className="text-xs md:text-sm">Palu, Sulawesi Tengah, Indonesia</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#F1A4D9] flex-shrink-0" />
                <a href="mailto:info@ipm-sulteng.org" className="text-xs md:text-sm hover:text-[#F1A4D9] transition-colors">
                  info@ipm-sulteng.org
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-extrabold text-white mb-3 text-sm">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-[#FDF1FC] rounded-lg border-2 border-[#7A2D61] shadow-[2px_2px_0px_0px_#7A2D61] hover:bg-[#F1A4D9] transition-colors" title="Facebook">
                <Share2 size={18} className="text-[#CD0179]" />
              </a>
              <a href="#" className="p-2 bg-[#FDF1FC] rounded-lg border-2 border-[#7A2D61] shadow-[2px_2px_0px_0px_#7A2D61] hover:bg-[#F1A4D9] transition-colors" title="Instagram">
                <MessageCircle size={18} className="text-[#CD0179]" />
              </a>
              <a href="#" className="p-2 bg-[#FDF1FC] rounded-lg border-2 border-[#7A2D61] shadow-[2px_2px_0px_0px_#7A2D61] hover:bg-[#F1A4D9] transition-colors" title="Twitter">
                <Send size={18} className="text-[#CD0179]" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#7A2D61]/30 pt-6">
          <p className="text-center text-xs md:text-sm text-[#FDF1FC] font-medium opacity-90">
            &copy; {currentYear} PW IPM Sulawesi Tengah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
