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

interface ContactProp {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Contact({ setPage }: ContactProp) {
  return (
    <section className={classes.section}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <nav className={classes.nav}>
          <span className="icon-arrow" onClick={() => setPage(3)}></span>
          <h3 className={classes.nav_head}>Contact</h3>
        </nav>
        <main className={classes.main}>&nbsp;</main>
      </motion.div>
    </section>
  );
}
