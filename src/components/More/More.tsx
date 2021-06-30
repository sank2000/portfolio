import React from 'react';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

import { containerVariants } from '@/constants';
import { withAdditionalProps } from 'types';
import Skills from './Skills';
import Contact from './Contact';

export default function More({ page, setExitLeft }: withAdditionalProps) {
  return (
    <motion.div
      key="more"
      variants={containerVariants}
      initial={page.forward ? 'hiddenLeft' : 'hiddenRight'}
      animate="visible"
      exit="exitLeft"
    >
      <nav className={classes.nav}>
        <button onClick={() => setExitLeft({ status: true })}>
          <span
            style={{ transform: 'rotate(-90deg)' }}
            className="icon-arrow"
            aria-label="back"
          ></span>
        </button>
      </nav>
      <main className={classes.main}>
        <div className={classes.skills}>
          <div className={classes.head}>
            <h3>Skills</h3>
          </div>
          <Skills />
        </div>
        <div className={classes.contact}>
          <div className={classes.head}>
            <h3>GET IN TOUCH</h3>
          </div>
          <Contact />
        </div>
      </main>
    </motion.div>
  );
}
