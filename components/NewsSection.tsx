import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function NewsSection() {
  const articles = [
    {
      id: 1,
      title: 'Peluncuran Program Literasi Digital 2024 untuk Pelajar se-Sulteng',
      excerpt: 'IPM Sulawesi Tengah meluncurkan program literasi digital terpadu dengan target 500 pelajar dalam 3 bulan ke depan.',
      category: 'Rilis Resmi',
      categoryColor: 'bg-primary-magenta/20 text-primary-magenta border border-primary-magenta',
      date: '23 September 2024',
      readTime: '5 min',
      image: '📱',
    },
    {
      id: 2,
      title: 'Opini: Mengapa Pelajar Harus Peduli pada Isu Lingkungan?',
      excerpt: 'Perspektif menarik dari pelajar senior tentang pentingnya kesadaran lingkungan dalam gerakan pelajar modern.',
      category: 'Opini Pelajar',
      categoryColor: 'bg-amber-100 text-amber-800 border border-amber-300',
      date: '20 September 2024',
      readTime: '7 min',
      image: '🌍',
    },
    {
      id: 3,
      title: 'Kabar: Lomba Esai Tingkat Nasional Dibuka untuk IPM Sulteng',
      excerpt: 'Kesempatan emas bagi kader untuk menunjukkan kemampuan menulis dan berpikir kritis pada tingkat nasional.',
      category: 'Kabar Sulteng',
      categoryColor: 'bg-blue-100 text-blue-700 border border-blue-300',
      date: '18 September 2024',
      readTime: '3 min',
      image: '📚',
    },
    {
      id: 4,
      title: 'Pelatihan Kepemimpinan Transformatif Dibuka untuk Semua Kader',
      excerpt: 'Workshop intensif 3 hari membahas kepemimpinan modern, manajemen proyek, dan soft skills untuk kader IPM.',
      category: 'Rilis Resmi',
      categoryColor: 'bg-primary-magenta/20 text-primary-magenta border border-primary-magenta',
      date: '15 September 2024',
      readTime: '4 min',
      image: '🎓',
    },
    {
      id: 5,
      title: 'Testimoni: Bagaimana IPM Mengubah Hidupku',
      excerpt: 'Kisah inspiratif dari seorang kader tentang perjalanannya berkembang melalui organisasi pelajar Muhammadiyah.',
      category: 'Opini Pelajar',
      categoryColor: 'bg-amber-100 text-amber-800 border border-amber-300',
      date: '12 September 2024',
      readTime: '6 min',
      image: '💫',
    },
    {
      id: 6,
      title: 'Kolaborasi Sukses: IPM Sulteng Bersama KKSI untuk Program Pemberdayaan',
      excerpt: 'Sinergi organisasi pelajar untuk menciptakan dampak sosial yang lebih besar di masyarakat Sulawesi Tengah.',
      category: 'Kabar Sulteng',
      categoryColor: 'bg-blue-100 text-blue-700 border border-blue-300',
      date: '10 September 2024',
      readTime: '5 min',
      image: '🤝',
    },
  ]

  return (
    <section className="py-20 bg-[#FDF1FC] px-4 sm:px-6 lg:px-8 relative border-t-4 border-[#CD0179]">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-ipm-yellow/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-magenta/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#7A2D61] mb-4">
            Warta IPM Sulawesi Tengah
          </h2>
          <p className="text-[#7A2D61] text-lg max-w-2xl mx-auto">
            Berita terbaru, opini pelajar, dan cerita inspiratif dari gerakan pelajar Muhammadiyah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/news/${article.id}`}
              className="bg-white card-neo p-6 space-y-4 hover:shadow-neo-xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden relative border-2 border-[#CD0179]"
            >
              {/* Decorative corner accent */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-bl from-primary-magenta/15 rounded-full"></div>
              
              {/* Image Placeholder with Gradient */}
              <div className="w-full h-40 bg-gradient-to-br from-primary-magenta/5 via-ipm-yellow/5 to-primary-magenta/5 rounded-lg border-2 border-ipm-dark flex items-center justify-center text-5xl shadow-neo-sm group-hover:shadow-neo-md transition-all">
                {article.image}
              </div>

              {/* Category Badge */}
              <div className={`inline-block px-3 py-1.5 text-xs font-bold rounded-full ${article.categoryColor} w-fit`}>
                {article.category}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-ipm-dark line-clamp-2 group-hover:text-primary-magenta transition">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-700 text-sm line-clamp-2">
                {article.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-xs text-gray-600 pt-2 border-t-2 border-gray-200">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-primary-magenta" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-primary-magenta" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Read More */}
              <div className="flex items-center gap-2 text-primary-magenta font-semibold text-sm group-hover:translate-x-1 transition-transform pt-2">
                Baca <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <Link
            href="/news"
            className="px-6 py-3 font-semibold rounded-lg bg-primary-magenta text-white border-2 border-ipm-dark shadow-neo-md hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-neo-sm transition-all duration-200 inline-flex items-center justify-center gap-2"
          >
            Lihat Semua Warta
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}
