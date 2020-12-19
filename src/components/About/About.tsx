import React, { useState } from 'react';
import classes from './style.module.scss';
import { motion } from 'framer-motion';

import { containerVariants } from '../../constants';

import { defaultProps } from '../../types';

export default function About({ page, setPage }: defaultProps) {
  const [exitLeft, setExitLeft] = useState(true);

  return (
    <motion.div
      key="about"
      variants={containerVariants}
      initial={page.forward ? 'hiddenLeft' : 'hiddenRight'}
      animate="visible"
      exit={exitLeft && page.forward ? 'exitLeft' : 'exitRight'}
    >
      <nav className={classes.nav}>
        <span
          className="icon-arrow"
          onClick={() => {
            setExitLeft(false);
            setPage({ no: 1, forward: false });
          }}
        ></span>
        <h3 className={classes.nav_head}>About</h3>
      </nav>

      <main className={classes.main}>&nbsp;</main>
      <footer className={classes.footer}>
        <span
          className="icon-arrow"
          onClick={() => setPage({ no: 3, forward: true })}
        ></span>
      </footer>
    </motion.div>
  );
}
