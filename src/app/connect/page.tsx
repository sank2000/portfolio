import Dock from '@/components/Dock'
import { connectLinks } from '@/constants/connectLinks'
import { quotes } from '@/constants/quotes'
import { ArrowUpRight, Bot } from 'lucide-react'
import { randomInt } from 'crypto'

export const dynamic = 'force-dynamic'

export default async function ConnectPage() {
  const quote = quotes[randomInt(quotes.length)] ?? quotes[0]

  return (
    <div className='app-shell connect-shell'>
      <main className='connect-main'>
        <div className='connect-intro connect-intro-animate'>
          <h2 className='heading-font connect-heading'>
            Let&apos;s <span className='terracotta'>Collaborate</span>_
          </h2>
          <p className='connect-subtitle'>Pick your favorite channel and let&apos;s build something meaningful together.</p>
        </div>

        <div className='connect-grid'>
          {connectLinks.map((item, index) => {
            const Icon = item.icon
            return (
              <a
                key={item.name}
                href={item.href}
                target='_blank'
                rel='noreferrer'
                className={`sketchy-card connect-card ${item.rotate} tone-${item.tone}`}
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <div className='connect-top'>
                  <div className={`connect-icon ${item.tone}`}>
                    {Icon ? <Icon size={30} /> : <span className='code-font connect-icon-text'>{item.label}</span>}
                  </div>
                  <span className='connect-open'>
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <h3 className='heading-font connect-title'>{item.name}</h3>
                <p className='code-font connect-handle'>{item.handle}</p>
              </a>
            )
          })}
        </div>

        <div className='sketchy-card connect-note connect-note-animate'>
          <p className='connect-note-copy'>&quot;{quote.content}&quot;</p>
          <p className='code-font connect-note-meta'>- {quote.author}</p>
        </div>

        <p className='code-font connect-ai-credit'>
          <Bot size={16} /> Designed and built with help of AI
        </p>
      </main>

      <Dock active='connect' />
    </div>
  )
}
