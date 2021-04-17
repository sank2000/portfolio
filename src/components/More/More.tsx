import React from 'react';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

import { containerVariants } from '../../constants';
import { defaultProps } from 'types';
import Skills from './Skills';
import Contact from './Contact';
import Experience from './Experience';

export default function More({ page, setPage }: defaultProps) {
  return (
    <motion.div
      key="more"
      variants={containerVariants}
      initial={page.forward ? 'hiddenLeft' : 'hiddenRight'}
      animate="visible"
      exit="exitLeft"
    >
      <nav className={classes.nav}>
        <span
          className="icon-arrow"
          onClick={() => setPage({ no: 3, forward: false })}
        ></span>
      </nav>
      <main className={classes.main}>
        <div className={classes.skills}>
          <div className={classes.head}>
            <h3>Skills</h3>
          </div>
          <Skills />
        </div>
        <div className={classes.skills}>
          <div className={classes.head}>
            <h3>Experience</h3>
          </div>
          <Experience />
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
