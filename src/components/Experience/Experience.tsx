import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import classes from './style.module.scss';

import { containerVariants, experience } from '@/constants';
import { withAdditionalProps, experienceProps } from 'types';
import { NavBar } from 'components';
import Card from './Card';

export default function Experience({
  page,
  exitLeft,
  setExitLeft,
}: withAdditionalProps) {
  const [experiencePage, setExperiencePage] = useState(1);
  const [animateForward, setAnimateForward] = useState({ value: true });
  const [show, setShow] = useState(false);
  const initialRef = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (initialRef.current) {
      if (animateForward.value) {
        setExperiencePage((old) => old + 1);
      } else {
        setExperiencePage((old) => old - 1);
      }
    } else {
      initialRef.current = true;
    }
  }, [animateForward]);

  return (
    <motion.div
      key="about"
      variants={containerVariants}
      initial={page.forward ? 'hiddenLeft' : 'hiddenRight'}
      animate="visible"
      exit={exitLeft.status ? 'exitLeft' : 'exitRight'}
    >
      <NavBar name="Experience" {...{ setExitLeft }} />

      {show && (
        <main className={classes.main}>
          <div className={classes.experience}>
            <AnimatePresence>
              {experience
                .slice(experiencePage * 2 - 2, experiencePage * 2)
                .map((data: experienceProps, ind) => {
                  return (
                    <Card
                      {...data}
                      forward={animateForward.value}
                      key={`${data.company}-${ind}-${experiencePage}`}
                    />
                  );
                })}
            </AnimatePresence>
          </div>
          <div className={classes.page_nav}>
            {experiencePage != 1 && (
              <button
                onClick={() => {
                  if (experiencePage === 1) return;
                  setAnimateForward({ value: false });
                }}
              >
                <span
                  className="icon-arrow-left-circle"
                  aria-label="back"
                ></span>
              </button>
            )}
            {!(experience.length <= experiencePage * 2) && (
              <button
                onClick={() => {
                  if (experience.length <= experiencePage * 2) return;
                  setAnimateForward({ value: true });
                }}
              >
                <span
                  className="icon-arrow-right-circle"
                  aria-label="next"
                ></span>
              </button>
            )}
          </div>
        </main>
      )}
    </motion.div>
  );
}
