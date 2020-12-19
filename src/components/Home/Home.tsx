import React from 'react';
import classes from './style.module.scss';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'tween', duration: 0.8, delay: 0.5 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

interface HomeProp {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setPage }: HomeProp) {
  return (
    <motion.div
      key="home"
      className={classes.home}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <nav className={classes.nav}>
        <div className={classes.nav_brand}>S</div>
        <ul className={classes.nav_links}>
          <li onClick={() => setPage(2)}>About</li>
          <li onClick={() => setPage(3)}>Projects</li>
          <li onClick={() => setPage(4)}>Contact</li>
        </ul>
      </nav>
      <main className={classes.main}>
        <h2>Hi there. I'm </h2>
        <h1>SAN </h1>
      </main>
      <footer className={classes.footer}>
        <span className="icon-arrow" onClick={() => setPage(2)}></span>
      </footer>
      <h3>FULL STACK DEV</h3>
    </motion.div>
  );
}
