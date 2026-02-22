import Dock from '@/components/Dock'
import HelloFriend from '@/components/HelloFriend'
import AboutTimeline from '@/components/AboutTimeline'
import experienceData from '@/data/experience.json'
import { Coffee, Laptop, Music } from 'lucide-react'
import Image from 'next/image'

type ExperienceItem = {
  company: string
  from: string
  to: string
  designation: string
  description: string[]
  link: string
}

export default function AboutPage() {
  const timeline: Array<
    ExperienceItem & {
      side: 'left' | 'right'
      accent: 'terracotta' | 'moss'
    }
  > = (experienceData as ExperienceItem[]).map((item, index) => ({
    ...item,
    side: index % 2 === 0 ? 'left' : 'right',
    accent: index % 2 === 0 ? 'terracotta' : 'moss',
  }))

  return (
    <div className='app-shell about-shell'>
      <main className='about-main'>
        <section className='about-hero about-hero-animate'>
          <div className='about-hero-copy sketchy-card about-intro-card about-intro-animate'>
            <HelloFriend />
            <p className='about-description'>
              I&apos;m Santhosh (or San), a Full-Stack Engineer at Zoho. I build scalable event-driven systems with Java, Spring
              Boot, Kafka, and JavaScript, and turn complex business requirements into high-performance products with clean,
              intuitive user experiences.
            </p>
            <div className='about-chips'>
              <div className='sketchy-card about-chip'>
                <Coffee size={20} />
                <span>2-3 Cups/Day</span>
              </div>
              <div className='sketchy-card about-chip'>
                <Music size={20} />
                <span>Kollywood Tunes</span>
              </div>
              <div className='sketchy-card about-chip'>
                <Laptop size={20} />
                <span>Mac</span>
              </div>
            </div>
          </div>

          <div className='about-photo-wrap about-photo-animate'>
            <div className='sketchy-card about-photo-card'>
              <Image src='/personal_image.jpeg' className='about-photo' alt='Santhosh' width={600} height={600} />
            </div>
            <div className='sketchy-border about-photo-tag heading-font'>That&apos;s me!</div>
          </div>
        </section>

        <AboutTimeline timeline={timeline} />
      </main>

      <Dock active='me' />
    </div>
  )
}
