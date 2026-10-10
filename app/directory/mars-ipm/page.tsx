import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mars & Hymne IPM | PW IPM Sulawesi Tengah',
  description: 'Mars Ikatan Pelajar Muhammadiyah dan Hymne IPM.',
}

export default function MarsIpmPage() {
  return (
    <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:uppercase text-black">
      <h2 className="text-3xl border-b-4 border-black pb-4 mb-6">Mars Ikatan Pelajar Muhammadiyah</h2>
      <div className="bg-[#FFF4FA] border-2 border-black p-6 rounded-none mb-8">
        <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed text-black font-medium">
          {`Bersatu berpadu menjalin ukhuwah
Di dalam ikatan Pelajar Muhammadiyah
Terampil berilmu, berakhlaq mulia
Pelopor dan pelangsung penyempurna amanah

Berjuang dengan semboyan kita
Nuun Walqolami Wamaa Yasturuun

Bangkitlah hai pelajar Muhammadiyah
Bangkitlah tradisikan keilmuan
Tegaskan tujuan ciptakan masyarakat Islam yang sebenar-benarnya

Berjuang dengan semboyan kita
Nuun Walqolami Wamaa Yasturuun`}
        </pre>
      </div>

      <h2 className="text-3xl border-b-4 border-black pb-4 mb-6">Hymne IPM</h2>
      <div className="bg-[#FFF4FA] border-2 border-black p-6 rounded-none">
        <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed text-black font-medium">
          {`Puji syukur ke hadirat Allah
Tuhan seru sekalian alam
Atas rahmat dan karunia-Nya
Lahir Ikatan Pelajar Muhammadiyah

Berlandaskan Islam yang mulia
Membangun ukhuwah islamiyah
Menjunjung tinggi nilai agama
Demi terwujudnya masyarakat sejahtera

IPM berjaya, IPM mulia
Menjadi pelopor kemajuan bangsa
IPM berjuang, IPM mengabdi
Untuk agama, bangsa, dan negara`}
        </pre>
      </div>
    </div>
  )
}

