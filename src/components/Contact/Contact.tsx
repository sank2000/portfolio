import React from 'react';
import classes from './style.module.scss';
import { motion } from 'framer-motion';

import { containerVariants } from '../../constants';

interface ContactProp {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Contact({ setPage }: ContactProp) {
  return (
    <motion.div
      key="contact"
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
  );
}
