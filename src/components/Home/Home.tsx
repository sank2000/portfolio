import React from 'react';
import classes from './style.module.scss';
import { motion } from 'framer-motion';

import { containerVariants } from '../../constants';

import { defaultProps } from '../../types';

export default function Home({ page, setPage }: defaultProps) {
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
          <img src="/icons/logo white.svg" alt="logo" />
        </div>
        <ul className={classes.nav_links}>
          <li onClick={() => setPage({ no: 2, forward: true })}>About</li>
          <li onClick={() => setPage({ no: 3, forward: true })}>Projects</li>
          <li onClick={() => setPage({ no: 4, forward: true })}>More</li>
        </ul>
      </nav>
      <main className={classes.main}>
        <h2>Hi there. I'm </h2>
        <h1>SAN</h1>
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
      <h3>FULL STACK DEV</h3>
    </motion.div>
  );
}
