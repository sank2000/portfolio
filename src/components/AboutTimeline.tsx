'use client'

import { useEffect, useRef } from 'react'

type TimelineItem = {
  company: string
  from: string
  to: string
  designation: string
  description: string[]
  link: string
  side: 'left' | 'right'
  accent: 'terracotta' | 'moss'
}

export default function AboutTimeline({ timeline }: { timeline: TimelineItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const nodes = root.querySelectorAll<HTMLElement>('.timeline-item-animate')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <section className='about-timeline-section'>
      <h2 className='heading-font sketchy-underline about-section-title'>Experience Timeline</h2>
      <div className='about-timeline' ref={containerRef}>
        <div className='timeline-line' />
        <div className='timeline-grid'>
          {timeline.map((item, index) => (
            <div
              key={`${item.company}-${item.from}`}
              className={`timeline-item ${item.side} timeline-item-animate`}
              style={{ animationDelay: `${0.05 * (index + 1)}s` }}
            >
              <div className={`sketchy-card timeline-card ${item.side}`}>
                <span className={`code-font timeline-period ${item.accent}`}>
                  {item.from} - {item.to}
                </span>
                <h3 className='heading-font timeline-title'>{item.designation}</h3>
                <p className='timeline-company'>
                  <a href={item.link} target='_blank' rel='noreferrer'>
                    {item.company}
                  </a>
                </p>
                <ul className='timeline-points'>
                  {item.description.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className='timeline-dot' />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
