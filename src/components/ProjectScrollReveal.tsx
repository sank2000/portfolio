'use client'

import { useEffect } from 'react'

export default function ProjectScrollReveal() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.project-card-animate')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return null
}
