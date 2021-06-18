import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

import { containerVariants } from '@/constants';
import { defaultProps } from 'types';

export default function Home({ page, setPage }: defaultProps) {
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
          <li onClick={() => setPage({ no: 2, forward: true })}>About</li>
          <li onClick={() => setPage({ no: 3, forward: true })}>Projects</li>
          <li onClick={() => setPage({ no: 4, forward: true })}>More</li>
        </ul>
      </nav>
      <main className={classes.main}>
        <div className={classes.main_brand}>
          <img src="/images/logo/logo white.svg" alt="logo" />
        </div>
        <h1>Hi there. I'm </h1>
        <h2>SAN</h2>
      </main>
      <footer className={classes.footer}>
        <motion.span
          className="icon-arrow"
          onClick={() => setPage({ no: 2, forward: true })}
          animate={{
            scale: [1, 1.3, 1, 1.3, 1],
            rotate: [90, 90, 90, 90, 90],
            transition: {
              yoyo: Infinity,
              duration: 2,
            },
          }}
        ></motion.span>
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
