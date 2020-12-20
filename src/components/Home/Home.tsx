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
      exit="exitLeft"
    >
      <nav className={classes.nav}>
        <div className={classes.nav_brand}>S</div>
        <ul className={classes.nav_links}>
          <li onClick={() => setPage({ no: 2, forward: true })}>About</li>
          <li onClick={() => setPage({ no: 3, forward: true })}>Projects</li>
          <li onClick={() => setPage({ no: 4, forward: true })}>Contact</li>
        </ul>
      </nav>
      <main className={classes.main}>
        <h2>Hi there. I'm </h2>
        <h1>SAN</h1>
      </main>
      <footer className={classes.footer}>
        <span
          className="icon-arrow"
          onClick={() => setPage({ no: 2, forward: true })}
        ></span>
      </footer>
      <motion.h3
        initial={{ opacity: 0.2 }}
        animate={{
          opacity: 1,
          transition: {
            opacity: {
              yoyo: Infinity,
              duration: 2,
            },
          },
        }}
      >
        FULL STACK DEV
      </motion.h3>
    </motion.div>
  );
}
