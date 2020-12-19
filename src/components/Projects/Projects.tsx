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

interface ProjectsProp {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Projects({ setPage }: ProjectsProp) {
  return (
    <motion.div
      key="projects"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <nav className={classes.nav}>
        <span className="icon-arrow" onClick={() => setPage(2)}></span>
        <h3 className={classes.nav_head}>Projects</h3>
      </nav>
      <main className={classes.main}>&nbsp;</main>
      <footer className={classes.footer}>
        <span className="icon-arrow" onClick={() => setPage(4)}></span>
      </footer>
    </motion.div>
  );
}
