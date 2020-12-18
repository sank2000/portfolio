import React from 'react';
import classes from './style.module.scss';
import { motion } from 'framer-motion';

const h2Variants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', delay: 0.5 },
  },
};

interface HomeProp {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setPage }: HomeProp) {
  return (
    <section className={classes.section}>
      <nav className={classes.nav}>
        <div className={classes.nav_brand}>S</div>
        <ul className={classes.nav_links}>
          <li onClick={() => setPage(2)}>About</li>
          <li onClick={() => setPage(3)}>Projects</li>
          <li onClick={() => setPage(4)}>Contact</li>
        </ul>
      </nav>
      <main className={classes.main}>
        <motion.h2 variants={h2Variants} initial="hidden" animate="visible">
          Hi there. I'm{' '}
        </motion.h2>
        <h1>SAN </h1>
      </main>
      <footer className={classes.footer}>
        <span className="icon-arrow" onClick={() => setPage(2)}></span>
      </footer>
      <h3>FULL STACK DEV</h3>
    </section>
  );
}
