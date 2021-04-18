import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import {
  Home,
  About,
  Projects,
  More,
  Particles,
  Loader,
  CustomHead,
} from 'components';
import { page } from 'types';

export default function Index() {
  const [page, setPage] = useState<page>({
    no: 1,
    forward: true,
  });
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    document.documentElement.lang = 'en-us';
    setTimeout(() => {
      setLoader(false);
    }, 3500);
  }, []);

  return (
    <>
      <CustomHead />
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
