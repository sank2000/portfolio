import Link from 'next/link'
import { Briefcase, Handshake, Home, User } from 'lucide-react'

type DockTab = 'home' | 'me' | 'work' | 'connect'

export default function Dock({ active }: { active: DockTab }) {
  return (
    <div className='dock-wrap'>
      <nav className='sketchy-dock dock'>
        <Link href='/' className={`dock-item ${active === 'home' ? 'active' : ''}`}>
          <Home size={24} />
          <span>Home</span>
        </Link>
        <Link href='/about' className={`dock-item ${active === 'me' ? 'active' : ''}`}>
          <User size={24} />
          <span>Me</span>
        </Link>
        <Link href='/projects' className={`dock-item ${active === 'work' ? 'active' : ''}`}>
          <Briefcase size={24} />
          <span>Projects</span>
        </Link>
        <Link href='/connect' className={`dock-item ${active === 'connect' ? 'active' : ''}`}>
          <Handshake size={24} />
          <span>Connect</span>
        </Link>
      </nav>
    </div>
  )
}
