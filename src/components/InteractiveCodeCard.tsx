'use client'

import { useState } from 'react'

type TokenKind = 'keyword' | 'prop' | 'string' | 'number' | 'symbol' | 'command' | 'flag' | 'plain'
type Token = { text: string; kind?: TokenKind }

const editorViews: Array<{ tab: string; lines: Token[][] }> = [
  {
    tab: 'app.js',
    lines: [
      [
        { text: 'const', kind: 'keyword' },
        { text: ' me ', kind: 'plain' },
        { text: '=', kind: 'symbol' },
        { text: ' {', kind: 'symbol' },
      ],
      [
        { text: '  motto', kind: 'prop' },
        { text: ': ', kind: 'symbol' },
        { text: '"Build. Learn. Share."', kind: 'string' },
        { text: ',', kind: 'symbol' },
      ],
      [
        { text: '  likes', kind: 'prop' },
        { text: ': [', kind: 'symbol' },
        { text: '"Coffee"', kind: 'string' },
        { text: ', ', kind: 'symbol' },
        { text: '"Dance"', kind: 'string' },
        { text: '],', kind: 'symbol' },
      ],
      [
        { text: '  status', kind: 'prop' },
        { text: ': ', kind: 'symbol' },
        { text: '"Happy"', kind: 'string' },
      ],
      [{ text: '};', kind: 'symbol' }],
    ],
  },
  {
    tab: 'README.md',
    lines: [
      [{ text: '# About Me', kind: 'keyword' }],
      [{ text: '- Build scalable APIs', kind: 'plain' }],
      [{ text: '- Building with Java and JavaScript', kind: 'plain' }],
      [{ text: '- Strong focus on scalability', kind: 'plain' }],
      [{ text: '- Ship fast, iterate faster', kind: 'plain' }],
    ],
  },
  {
    tab: 'terminal',
    lines: [
      [
        { text: '> ', kind: 'symbol' },
        { text: 'git', kind: 'command' },
        { text: ' add .', kind: 'plain' },
      ],
      [
        { text: '> ', kind: 'symbol' },
        { text: 'git', kind: 'command' },
        { text: ' commit ', kind: 'plain' },
        { text: '-m', kind: 'flag' },
        { text: ' ', kind: 'plain' },
        { text: '"feat: portfolio"', kind: 'string' },
      ],
      [
        { text: '> ', kind: 'symbol' },
        { text: 'git', kind: 'command' },
        { text: ' push', kind: 'plain' },
      ],
    ],
  },
]

export default function InteractiveCodeCard() {
  const [activeView, setActiveView] = useState(0)

  const currentView = editorViews[activeView]

  return (
    <div className='sketchy-card code-card'>
      <div className='window-dots'>
        {editorViews.map((view, index) => (
          <button
            key={view.tab}
            type='button'
            className={`window-dot-btn ${activeView === index ? 'filled' : ''}`}
            onClick={() => setActiveView(index)}
            aria-label={`Open ${view.tab}`}
          />
        ))}
      </div>

      <div className='editor-shell'>
        <div className='editor-tabs code-font'>
          {editorViews.map((view, index) => (
            <button
              key={view.tab}
              type='button'
              className={`editor-tab ${activeView === index ? 'active' : ''}`}
              onClick={() => setActiveView(index)}
              aria-label={`Open ${view.tab} tab`}
            >
              {view.tab}
            </button>
          ))}
        </div>

        <div className='editor-body code-font'>
          {currentView.lines.map((line, index) => (
            <p key={`${currentView.tab}-${index}`} className='editor-line'>
              {currentView.tab !== 'terminal' ? (
                <span className='editor-line-no'>{String(index + 1).padStart(2, '0')}</span>
              ) : null}
              <span>
                {line.map((token, tokenIndex) => (
                  <span key={`${currentView.tab}-${index}-${tokenIndex}`} className={`tok tok-${token.kind ?? 'plain'}`}>
                    {token.text}
                  </span>
                ))}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
