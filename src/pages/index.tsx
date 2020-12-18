import Head from 'next/head';
import { useState } from 'react';
import { Home, About, Projects, Contact } from '../components';
import { AnimatePresence } from 'framer-motion';

export default function Index() {
  const [page, setPage] = useState(1);

  return (
    <>
      <Head>
        <title>san</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section style={{ width: '99vw', overflow: 'hidden' }}>
        <AnimatePresence exitBeforeEnter>
          {page === 1 && <Home setPage={setPage} />}
          {page === 2 && <About setPage={setPage} />}
          {page === 3 && <Projects setPage={setPage} />}
          {page === 4 && <Contact setPage={setPage} />}
        </AnimatePresence>
      </section>
    </>
  );
}
