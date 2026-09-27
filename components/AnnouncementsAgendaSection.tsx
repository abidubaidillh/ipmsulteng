'use client'

import { MapPin, Video } from 'lucide-react'

export default function AnnouncementsAgendaSection() {
  const announcements = [
    { id: 1, date: '25 Sep 2026', title: 'Pengumuman Seleksi Calon Pengurus Pusat IPM Tahun 2026-2028' },
    { id: 2, date: '22 Sep 2026', title: 'Pembukaan Pendaftaran Program Beasiswa Literasi Digital' }
  ]

  const agendaItems = [
    { id: 1, date: '28 Sep 2026', time: '09:00 WITA', title: 'Workshop: Strategi Media Sosial untuk Organisasi Modern', location: 'Gedung Kantor PW IPM, Palu', type: 'offline' },
    { id: 2, date: '02 Okt 2026', time: '19:30 WITA', title: 'Webinar: Kepemimpinan Perempuan dalam Organisasi Dakwah', location: 'Online via Zoom', type: 'online' }
  ]

  return (
    <section className="py-16 bg-[#E8D5F2] px-4 md:px-8 border-b-2 border-[#7A2D61] relative">
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#CD0179]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Column 1: PENGUMUMAN (Announcements) */}
          <div className="space-y-4">
            <h4 className="text-2xl md:text-3xl font-black text-[#7A2D61] uppercase tracking-wide mb-6">
              Pengumuman
            </h4>

            <div className="space-y-3">
              {announcements.map((item) => (
                <div key={item.id} className="bg-white border-2 border-[#7A2D61] shadow-[3px_3px_0px_0px_#7A2D61] p-4 rounded-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                  <div className="inline-block mb-2 px-3 py-1 bg-[#FDF1FC] border border-[#CD0179] text-[#CD0179] text-xs font-bold rounded">{item.date}</div>
                  <h5 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-[#CD0179] transition-colors line-clamp-2">{item.title}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: AGENDA (Events) */}
          <div className="space-y-4">
            <h4 className="text-2xl md:text-3xl font-black text-[#7A2D61] uppercase tracking-wide mb-6">
              Agenda
            </h4>

            <div className="space-y-3">
              {agendaItems.map((item) => (
                <div key={item.id} className="bg-white border-2 border-[#7A2D61] shadow-[3px_3px_0px_0px_#7A2D61] p-4 rounded-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                  <div className="inline-block mb-2 px-3 py-1 bg-[#FDF1FC] border border-[#CD0179] text-[#CD0179] text-xs font-bold rounded">{item.date} • {item.time}</div>
                  <h5 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-[#CD0179] transition-colors line-clamp-2 mb-3">{item.title}</h5>
                  <div className="flex items-start gap-2">
                    {item.type === 'online' ? (
                      <>
                        <Video size={16} className="text-[#7A2D61] flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-slate-600">{item.location}</p>
                          <span className="inline-block mt-1.5 px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded border border-blue-300">Online</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <MapPin size={16} className="text-[#CD0179] flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-slate-600">{item.location}</p>
                          <span className="inline-block mt-1.5 px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded border border-amber-300">Offline</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

