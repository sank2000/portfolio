import Head from 'next/head';
import { useState } from 'react';
import { Home, About, Projects, Contact } from '../components';
import { AnimatePresence } from 'framer-motion';

import { page } from '../types';

export default function Index() {
  const [page, setPage] = useState<page>({
    no: 1,
    forward: true,
  });

  return (
    <>
      <Head>
        <title>san</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="section">
        <AnimatePresence exitBeforeEnter>
          {page.no === 1 && <Home page={page} setPage={setPage} key="home" />}
          {page.no === 2 && <About page={page} setPage={setPage} key="about" />}
          {page.no === 3 && (
            <Projects page={page} setPage={setPage} key="projects" />
          )}
          {page.no === 4 && (
            <Contact page={page} setPage={setPage} key="contact" />
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
