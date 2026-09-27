'use client'

import { useState, useEffect, useRef } from 'react'

interface Stat {
  value: number
  label: string
}

export default function StatsSection() {
  const [displayValues, setDisplayValues] = useState<number[]>([0, 0, 0, 0])
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasAnimatedRef = useRef(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const stats: Stat[] = [
    {
      value: 12,
      label: 'Pimpinan Cabang'
    },
    {
      value: 45,
      label: 'Pimpinan Ranting'
    },
    {
      value: 8,
      label: 'Pengurus Daerah'
    },
    {
      value: 1250,
      label: 'Pelajar Muhammadiyah'
    }
  ]

  // Format number with thousand separator
  const formatNumber = (num: number): string => {
    return num.toLocaleString('id-ID')
  }

  // Animate count-up effect
  const animateCount = () => {
    if (hasAnimatedRef.current) return

    // Mark as animated and disconnect observer immediately
    hasAnimatedRef.current = true
    if (observerRef.current && sectionRef.current) {
      observerRef.current.unobserve(sectionRef.current)
    }

    const duration = 2000 // 2 seconds
    const startTime = Date.now()
    const targetValues = stats.map(stat => stat.value)

    const updateCounts = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out cubic)
      const easeProgress = 1 - Math.pow(1 - progress, 3)

      const newValues = targetValues.map(target => 
        Math.floor(target * easeProgress)
      )

      setDisplayValues(newValues)

      if (progress < 1) {
        requestAnimationFrame(updateCounts)
      } else {
        // Ensure final values are exact
        setDisplayValues(targetValues)
      }
    }

    updateCounts()
  }

  // Set up Intersection Observer - runs once on mount
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger animation only when entering viewport and not yet animated
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            animateCount()
          }
        })
      },
      {
        threshold: 0.25 // Trigger when 25% of the component is visible
      }
    )

    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current)
    }

    // Cleanup: unobserve on unmount
    return () => {
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="bg-white py-16 px-4 md:px-8 border-b-2 border-[#CD0179]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#7A2D61] tracking-wide">
            Pelajar Muhammadiyah Sulawesi Tengah
          </h2>
          <h3 className="text-3xl md:text-4xl font-black text-[#CD0179] uppercase tracking-wider mt-1">
            Dalam Angka
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#FDF1FC] p-6 rounded-xl text-center flex flex-col items-center justify-center border-2 border-[#CD0179] shadow-[4px_4px_0px_0px_#7A2D61]"
            >
              <div className="text-4xl md:text-5xl font-black text-[#CD0179] mb-2">
                {formatNumber(displayValues[index])}
              </div>
              <div className="text-base md:text-lg font-bold text-slate-800">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
