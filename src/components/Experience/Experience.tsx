import React from 'react';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

import { containerVariants, experience } from '@/constants';
import { withAdditionalProps, experienceProps } from 'types';
import Card from './Card';

export default function Experience({
  page,
  exitLeft,
  setExitLeft,
}: withAdditionalProps) {
  return (
    <motion.div
      key="about"
      variants={containerVariants}
      initial={page.forward ? 'hiddenLeft' : 'hiddenRight'}
      animate="visible"
      exit={exitLeft.status ? 'exitLeft' : 'exitRight'}
    >
      <nav className={classes.nav}>
        <span
          className="icon-arrow"
          onClick={() => {
            setExitLeft({
              status: true,
            });
          }}
        ></span>
        <h3 className={classes.nav_head}>Experience</h3>
        <motion.span
          className="icon-arrow"
          onClick={() => {
            setExitLeft({
              status: false,
            });
          }}
          animate={{
            scale: [1, 1.3, 1, 1.3, 1],
            rotate: [90, 90, 90, 90, 90],
            transition: {
              yoyo: Infinity,
              duration: 2,
            },
          }}
        ></motion.span>
      </nav>

      <main className={classes.main}>
        <div className={classes.experience}>
          {experience.map((data: experienceProps, ind) => {
            return <Card {...data} key={ind} />;
          })}
        </div>
      </main>
    </motion.div>
  );
}
