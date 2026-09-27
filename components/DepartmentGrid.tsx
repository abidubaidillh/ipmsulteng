import Link from 'next/link'
import { ArrowRight, Users, BookOpen, Heart, TrendingUp, Briefcase } from 'lucide-react'

export default function DepartmentGrid() {
  const departments = [
    {
      title: 'Perkaderan',
      description: 'Program pengembangan kualitas dan karakter kader IPM melalui pelatihan berkelanjutan dan mentoring.',
      href: '/bidang/perkaderan',
      icon: Users,
      iconBg: 'from-primary-magenta/30 to-primary-magenta/10',
      borderColor: 'border-primary-magenta',
      badgeBg: 'bg-primary-magenta/20 text-primary-magenta',
      hoverBg: 'group-hover:bg-primary-magenta group-hover:text-white',
      badge: 'Program Unggulan',
    },
    {
      title: 'PIP / Literasi',
      description: 'Program Pemberdayaan Integralistik Pelajar fokus pada peningkatan literasi dan pemberdayaan masyarakat.',
      href: '/bidang/literasi',
      icon: BookOpen,
      iconBg: 'from-ipm-yellow/40 to-ipm-yellow/10',
      borderColor: 'border-ipm-yellow',
      badgeBg: 'bg-ipm-yellow/20 text-ipm-dark',
      hoverBg: 'group-hover:bg-ipm-yellow group-hover:text-ipm-dark',
      badge: 'Fokus Literasi',
    },
    {
      title: 'KDI (Keputrian)',
      description: 'Komisi Kepemimpinan Perempuan yang memberdayakan siswi dan membangun kepemimpinan wanita Islam.',
      href: '/bidang/kdi',
      icon: Heart,
      iconBg: 'from-red-300/30 to-red-100/10',
      borderColor: 'border-red-400',
      badgeBg: 'bg-red-100 text-red-700',
      hoverBg: 'group-hover:bg-red-400 group-hover:text-white',
      badge: 'Pemberdayaan Siswi',
    },
    {
      title: 'ASBO (Advokasi)',
      description: 'Program advokasi sosial berbasis organisasi untuk membela kepentingan pelajar dan masyarakat luas.',
      href: '/bidang/asbo',
      icon: Briefcase,
      iconBg: 'from-ipm-yellow/40 to-orange-200/20',
      borderColor: 'border-ipm-yellow',
      badgeBg: 'bg-orange-100 text-orange-700',
      hoverBg: 'group-hover:bg-ipm-yellow group-hover:text-ipm-dark',
      badge: 'Advokasi Sosial',
    },
    {
      title: 'Kewirausahaan',
      description: 'Program pengembangan jiwa wirausaha untuk mempersiapkan pelajar menjadi entrepreneur muda yang berdampak.',
      href: '/bidang/wirausaha',
      icon: TrendingUp,
      iconBg: 'from-green-400/30 to-green-100/10',
      borderColor: 'border-green-500',
      badgeBg: 'bg-green-100 text-green-700',
      hoverBg: 'group-hover:bg-green-500 group-hover:text-white',
      badge: 'Entrepreneur Muda',
    },
    {
      title: 'Dakwah & Spiritual',
      description: 'Program pendalaman ilmu agama dan pembinaan spiritual untuk memperkuat aqidah dan akhlak kader.',
      href: '/bidang/dakwah',
      icon: Users,
      iconBg: 'from-purple-300/30 to-purple-100/10',
      borderColor: 'border-purple-400',
      badgeBg: 'bg-purple-100 text-purple-700',
      hoverBg: 'group-hover:bg-purple-500 group-hover:text-white',
      badge: 'Pembinaan Spiritual',
    },
  ]

  return (
    <section className="py-20 bg-[#CD0179] px-4 sm:px-6 lg:px-8 relative border-t-4 border-[#FDF1FC]">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-magenta/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-ipm-yellow/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bidang Organisasi
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Fokus kerja IPM Sulawesi Tengah dalam berbagai aspek kemajuan pelajar dan masyarakat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => {
            const Icon = dept.icon
            return (
              <Link
                key={dept.title}
                href={dept.href}
                className="bg-[#FDF1FC] card-neo p-6 space-y-4 hover:shadow-neo-xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer overflow-hidden relative"
              >
                {/* Decorative corner accent */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-bl from-primary-magenta/10 rounded-full"></div>
                
                <div className={`w-14 h-14 bg-gradient-to-br ${dept.iconBg} rounded-xl border-2 ${dept.borderColor} flex items-center justify-center ${dept.hoverBg} transition-all relative z-10 shadow-neo-sm`}>
                  <Icon size={28} />
                </div>
                
                {/* Category Badge */}
                <div className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border border-current/30 ${dept.badgeBg} w-fit`}>
                  {dept.badge}
                </div>
                
                <h3 className="text-xl font-bold text-ipm-dark">{dept.title}</h3>
                <p className="text-gray-700 text-sm">{dept.description}</p>
                <div className="flex items-center gap-2 text-primary-magenta font-semibold text-sm group-hover:translate-x-1 transition-transform pt-2">
                  Selengkapnya <ArrowRight size={16} />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
