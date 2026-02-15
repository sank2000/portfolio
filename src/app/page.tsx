import Dock from '@/components/Dock'
import Doodles from '@/components/Doodles'
import InteractiveCodeCard from '@/components/InteractiveCodeCard'

function getExperienceYears() {
  const start = new Date(2022, 4, 1)
  const now = new Date()
  let years = now.getFullYear() - start.getFullYear()
  const months = now.getMonth() - start.getMonth()
  if (months < 0) years -= 1
  return String(years)
}

export default function HomePage() {
  const experienceYears = getExperienceYears()

  return (
    <div className='app-shell home-shell'>
      <Doodles />

      <main className='main-grid home-main-animate'>
        <div className='hero-left hero-left-animate'>
          <div className='status-pill sketchy-border'>
            <span className='status-dot' />
            <span className='code-font status-text'>status = &quot;Ready to build!&quot;</span>
          </div>

          <div className='hero-title-wrap'>
            <h2 className='heading-font hero-subtitle'>Hello! I&apos;m</h2>
            <h1 className='heading-font hero-title'>
              <span className='hero-san'>SAN</span>
              <span className='hero-thosh'>THOSH</span>
            </h1>
          </div>

          <div className='role-tag sketchy-border'>
            <span className='heading-font typewriter-cursor'>Full Stack Developer</span>
          </div>

          <p className='hero-quote'>
            &quot;I turn complex product ideas into clean, event-driven systems that feel fast and intuitive to use.&quot;
          </p>

          <div className='stats-row'>
            <p className='heading-font single-experience sketchy-underline'>
              <span className='terracotta'>
                {experienceYears}
                <span className='exp-plus'>+</span>
              </span>{' '}
              Years Exp
            </p>
          </div>
        </div>

        <div className='hero-right hero-right-animate'>
          <div className='orbit-ring' />

          <InteractiveCodeCard />

          <div className='badge js'>JS</div>
          <div className='badge ts'>Java</div>

          <div className='wave-doodle' aria-hidden='true'>
            <svg width='80' height='80' viewBox='0 0 100 100' fill='none' strokeWidth='3'>
              <path d='M10,50 Q30,10 50,50 T90,50' />
            </svg>
          </div>
        </div>
      </main>

      <Dock active='home' />
    </div>
  )
}
