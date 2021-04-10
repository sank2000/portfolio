import React, { useState } from 'react';
import classes from './style.module.scss';
import { motion } from 'framer-motion';

import { containerVariants } from '../../constants';

import { defaultProps } from '../../types';

export default function About({ page, setPage }: defaultProps) {
  const [exitLeft, setExitLeft] = useState(false);

  return (
    <motion.div
      key="about"
      variants={containerVariants}
      initial={page.forward ? 'hiddenLeft' : 'hiddenRight'}
      animate="visible"
      exit={exitLeft ? 'exitLeft' : 'exitRight'}
    >
      <nav className={classes.nav}>
        <span
          className="icon-arrow"
          onClick={() => {
            setExitLeft(true);
            setPage({ no: 1, forward: false });
          }}
        ></span>
        <h3 className={classes.nav_head}>About</h3>
        <motion.span
          className="icon-arrow"
          onClick={() => setPage({ no: 3, forward: true })}
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
        <div className={classes.main__left}>
          <div>
            <h2>Hi</h2>
            <img src="/hi.gif" alt="hi" />
          </div>

          <h3>
            I am <span className={classes.name}>Santhosh</span> shortly{' '}
            <span className={classes.short_name}>San </span>
            doing my bachelor's degree in University College of Engineering,
            Trichy
          </h3>

          <ul>
            <li>
              <img src="/icons/logo white.svg" alt="logo" />I am from the
              so-called "Mango City", Salem.
            </li>
            <li>
              <img src="/icons/logo white.svg" alt="logo" />I am passionate
              about coding & designing, inquisitive in exploring new
              technologies to solve real-life problems
            </li>
            <li>
              <img src="/icons/logo white.svg" alt="logo" />I love working with
              people as a team and I am a good team player too
            </li>
            <li>
              <img src="/icons/logo white.svg" alt="logo" />
              Ready to give a shot to everything, I wanted in life.
            </li>
            <li>
              <img src="/icons/logo white.svg" alt="logo" />I spend my free time
              scrolling social media, listening to songs, and dancing.
            </li>
          </ul>
        </div>
        <div className={classes.main__right}>
          <div>
            <img src="/me.jpg" alt="me" />
          </div>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1Vf2E8M6a9DHQ07_4O4k4eR1dDdDaSpg2/view?usp=sharing"
          >
            CV
          </a>
        </div>
      </main>
    </motion.div>
  );
}
