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

      <main className={classes.main}>
        <div className={classes.main__left}>
          <div>
            <h2>Hi</h2>
            <img src="/hi.gif" alt="hi" />
          </div>

          <h3>
            I am <span className={classes.name}>Santhosh</span> pursuing
            Computer Science and Engineering at the University College of
            Engineering, Trichy.
          </h3>

          <ul>
            <li>
              <img src="/icons/logo white.svg" alt="logo" />I am from Salem.
            </li>
            <li>
              <img src="/icons/logo white.svg" alt="logo" />I am passionate
              about coding & designing.
            </li>
            <li>
              <img src="/icons/logo white.svg" alt="logo" />I am a good team
              player.
            </li>

            <li>
              <img src="/icons/logo white.svg" alt="logo" />I love to explore
              new technologies and use them to solve real-life problems.
            </li>
            <li>
              <img src="/icons/logo white.svg" alt="logo" />I spend my free time
              scrolling through social media, hearing songs, and dance.
            </li>
          </ul>
        </div>
        <div className={classes.main__right}>
          <div>
            <img src="/me.jpg" alt="me" />
          </div>
          <a href="/">RESUME</a>
        </div>
      </main>
      <footer className={classes.footer}>
        <span
          className="icon-arrow"
          onClick={() => setPage({ no: 3, forward: true })}
        ></span>
      </footer>
    </motion.div>
  );
}
