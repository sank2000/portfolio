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
    transition: { type: 'tween', delay: 0.5 },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

interface AboutProp {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function About({ setPage }: AboutProp) {
  return (
    <motion.div
      key="about"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <nav className={classes.nav}>
        <span className="icon-arrow" onClick={() => setPage(1)}></span>
        <h3 className={classes.nav_head}>About</h3>
      </nav>

      <main className={classes.main}>&nbsp;</main>
      <footer className={classes.footer}>
        <span className="icon-arrow" onClick={() => setPage(3)}></span>
      </footer>
    </motion.div>
  );
}