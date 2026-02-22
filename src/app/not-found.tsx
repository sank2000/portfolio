import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='app-shell projects-shell'>
      <main className='projects-main' style={{ display: 'grid', placeItems: 'center', minHeight: '80vh' }}>
        <div className='sketchy-card' style={{ padding: '2rem', maxWidth: '36rem', textAlign: 'center' }}>
          <h1 className='heading-font projects-heading'>
            404 <span className='terracotta'>Not Found</span>
          </h1>
          <p className='projects-subtitle' style={{ marginBottom: '1.25rem' }}>
            The page you are looking for does not exist.
          </p>
          <Link href='/' className='notfound-home-btn heading-font'>
            Go Home
          </Link>
        </div>
      </main>
    </div>
  )
}
