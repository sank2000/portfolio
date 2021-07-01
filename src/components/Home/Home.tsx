import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

import { containerVariants } from '@/constants';
import { withAdditionalProps } from 'types';

export default function Home({
  page,
  setPage,
  setExitLeft,
}: withAdditionalProps) {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((old) => !old);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      key="home"
      className={classes.home}
      variants={containerVariants}
      initial={page.forward ? 'hiddenLeft' : 'hiddenRight'}
      animate="visible"
      exit="exitRight"
    >
      <nav className={classes.nav}>
        <div className={classes.nav_brand}>
          <img src="/images/logo/logo white.svg" alt="logo" />
        </div>
        <ul className={classes.nav_links}>
          <li>
            <button onClick={() => setPage({ no: 2, forward: true })}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => setPage({ no: 3, forward: true })}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => setPage({ no: 4, forward: true })}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => setPage({ no: 5, forward: true })}>
              More
            </button>
          </li>
        </ul>
      </nav>
      <main className={classes.main}>
        <div className={classes.main_brand}>
          <img src="/images/logo/logo white.svg" alt="logo" />
        </div>
        <h1>Hi there. I&apos;m </h1>
        <h2>SAN</h2>
      </main>
      <footer className={classes.footer}>
        <motion.button
          onClick={() =>
            setExitLeft({
              status: false,
            })
          }
          animate={{
            scale: [1, 1.3, 1, 1.3, 1],
            rotate: [90, 90, 90, 90, 90],
            transition: {
              yoyo: Infinity,
              duration: 2,
            },
          }}
        >
          <span className="icon-arrow" aria-label="next"></span>
        </motion.button>
      </footer>
      <h3>
        {Array.from('FULL STACK DEV').map((val, ind) => {
          return (
            <span
              key={ind}
              style={{
                color: active
                  ? ind % 2 === 0
                    ? '#fff'
                    : 'rgba(255, 255, 255, 0.2)'
                  : ind % 2 !== 0
                  ? '#fff'
                  : 'rgba(255, 255, 255, 0.2)',
              }}
            >
              {val}
            </span>
          );
        })}
      </h3>
    </motion.div>
  );
}
