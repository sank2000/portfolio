import React from 'react';
import classes from './style.module.scss';
import { motion } from 'framer-motion';

import { containerVariants } from '../../constants';

import { defaultProps } from '../../types';

export default function Contact({ page, setPage }: defaultProps) {
  return (
    <motion.div
      key="contact"
      variants={containerVariants}
      initial={page.forward ? 'hiddenLeft' : 'hiddenRight'}
      animate="visible"
      exit="exitRight"
    >
      <nav className={classes.nav}>
        <span
          className="icon-arrow"
          onClick={() => setPage({ no: 3, forward: false })}
        ></span>
        <h3 className={classes.nav_head}>Contact</h3>
      </nav>
      <main className={classes.main}>&nbsp;</main>
    </motion.div>
  );
}
