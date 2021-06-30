import React from 'react';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

export default function About({
  name,
  setExitLeft,
}: {
  name: string;
  setExitLeft: React.Dispatch<
    React.SetStateAction<{
      status: boolean;
    }>
  >;
}) {
  return (
    <nav className={classes.nav}>
      <button
        onClick={() => {
          setExitLeft({
            status: true,
          });
        }}
      >
        <span
          style={{ transform: 'rotate(-90deg)' }}
          className="icon-arrow"
          aria-label="back"
        ></span>
      </button>
      <h3 className={classes.nav_head}>{name}</h3>
      <motion.button
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
      >
        <span className="icon-arrow" aria-label="next"></span>
      </motion.button>
    </nav>
  );
}
