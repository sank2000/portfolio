import React, { useState } from 'react';
import classes from './style.module.scss';
import { motion } from 'framer-motion';

import { containerVariants } from '../../constants';

import { defaultProps } from '../../types';

export default function Projects({ page, setPage }: defaultProps) {
  const [exitLeft, setExitLeft] = useState(true);

  return (
    <motion.div
      key="projects"
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
            setPage({ no: 2, forward: false });
          }}
        ></span>
        <h3 className={classes.nav_head}>Projects</h3>
      </nav>
      <main className={classes.main}>&nbsp;</main>
      <footer className={classes.footer}>
        <span
          className="icon-arrow"
          onClick={() => setPage({ no: 4, forward: true })}
        ></span>
      </footer>
    </motion.div>
  );
}
