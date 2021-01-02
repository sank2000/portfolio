import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Home, About, Projects, More, Particles, Loader } from '../components';
import { AnimatePresence } from 'framer-motion';

import { page } from '../types';

export default function Index() {
  const [page, setPage] = useState<page>({
    no: 1,
    forward: true,
  });
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3500);
  }, []);

  return (
    <>
      <Head>
        <title>Santhosh | personal portfolio</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/ico/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/ico/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/ico/favicon-16x16.png"
        />
        <link rel="manifest" href="/ico/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/ico/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/ico/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/ico/browserconfig.xml" />
        <meta name="theme-color" content="#252a34" />
      </Head>
      <>
        {loader && <Loader />}
        <section className="section">
          <Particles />
          <AnimatePresence exitBeforeEnter>
            {page.no === 1 && <Home page={page} setPage={setPage} key="home" />}
            {page.no === 2 && (
              <About page={page} setPage={setPage} key="about" />
            )}
            {page.no === 3 && (
              <Projects page={page} setPage={setPage} key="projects" />
            )}
            {page.no === 4 && <More page={page} setPage={setPage} key="more" />}
          </AnimatePresence>
        </section>
      </>
    </>
  );
}
