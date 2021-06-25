import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';

import {
  Home,
  About,
  Experience,
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
  const [exitLeft, setExitLeft] = useState({
    status: true,
  });
  const [loader, setLoader] = useState(true);
  const initialRef = useRef(false);

  const FIRST_PAGE = 1;
  const LAST_PAGE = 5;

  function handleLeft() {
    if (page.no !== FIRST_PAGE && page.no !== LAST_PAGE) {
      return setExitLeft({
        status: true,
      });
    }
    setPage((old) => {
      if (old.no === FIRST_PAGE) {
        return old;
      }
      return {
        forward: false,
        no: old.no - 1,
      };
    });
  }

  function handleRight() {
    if (page.no !== FIRST_PAGE && page.no !== LAST_PAGE) {
      return setExitLeft({
        status: false,
      });
    }
    setPage((old) => {
      if (old.no === LAST_PAGE) {
        return old;
      }
      return {
        forward: true,
        no: old.no + 1,
      };
    });
  }

  useEffect(() => {
    document.documentElement.lang = 'en-us';

    setTimeout(() => {
      setLoader(false);
    }, 3500);
  }, []);

  useEffect(() => {
    function handler(event) {
      const key = event.key;
      if (['ArrowRight', 'Enter', 'd'].includes(key)) {
        handleRight();
      } else if (['ArrowLeft', 'Backspace', 'a'].includes(key)) {
        handleLeft();
      }
    }
    window.addEventListener('keydown', handler);

    return () => {
      window.removeEventListener('keydown', handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (initialRef.current) {
      setPage((old) => ({
        forward: !exitLeft.status,
        no: exitLeft.status ? old.no - 1 : old.no + 1,
      }));
    } else {
      initialRef.current = true;
    }
  }, [exitLeft]);

  const handlers = useSwipeable({
    onSwipedLeft: handleLeft,
    onSwipedRight: handleRight,
  });

  return (
    <>
      <CustomHead />
      <>
        {loader && <Loader />}
        <section className="section" {...handlers}>
          <Particles />
          <AnimatePresence exitBeforeEnter>
            {page.no === 1 && (
              <Home {...{ exitLeft, setExitLeft, page, setPage }} key="home" />
            )}
            {page.no === 2 && (
              <About
                {...{ exitLeft, setExitLeft, page, setPage }}
                key="about"
              />
            )}
            {page.no === 3 && (
              <Experience
                {...{ exitLeft, setExitLeft, page, setPage }}
                key="experience"
              />
            )}
            {page.no === 4 && (
              <Projects
                {...{ exitLeft, setExitLeft, page, setPage }}
                key="projects"
              />
            )}
            {page.no === 5 && (
              <More {...{ exitLeft, setExitLeft, page, setPage }} key="more" />
            )}
          </AnimatePresence>
        </section>
      </>
    </>
  );
}
