import React from 'react';
import classes from './style.module.scss';
import { motion } from 'framer-motion';

import { containerVariants } from '../../constants';

import { defaultProps } from '../../types';

export default function More({ page, setPage }: defaultProps) {
  return (
    <motion.div
      key="more"
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
        <h3 className={classes.nav_head}>MORE</h3>
      </nav>
      <main className={classes.main}>
        <div className={classes.skills}>
          <h4>Skills</h4>
        </div>
        <div className={classes.contact}>
          <h4>GET IN TOUCH</h4>
          <div></div>
        </div>
      </main>
    </motion.div>
  );
}
