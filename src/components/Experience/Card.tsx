import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

import { experienceProps } from 'types';
import { containerVariants } from '@/constants';

export default function Card({
  designation,
  from,
  to,
  description,
  company,
  link,
  stack,
  forward,
}: experienceProps) {
  const [icon, setIcon] = useState(stack ? stack[0] : '');
  const intervalRef = useRef<any>();
  const countRef = useRef(0);

  useEffect(() => {
    if (stack && stack.length > 1) {
      intervalRef.current = setInterval(() => {
        countRef.current = countRef.current + 1;
        if (countRef.current === stack.length) {
          countRef.current = 0;
        }
        setIcon(stack[countRef.current]);
      }, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [stack]);

  return (
    <motion.div
      variants={containerVariants}
      initial={forward ? 'hiddenLeft' : 'hiddenRight'}
      animate="visible"
      exit={forward ? 'exitRight' : 'exitLeft'}
      className={classes.experience__container}
      key={`${from}-${company}`}
    >
      <div className={classes.left__container}>
        <p>{from}</p>
        <div className={classes.icon__container}>
          <span className={`icon-${icon}`}></span>
        </div>
        <p>{to}</p>
      </div>
      <div className={classes.details__container}>
        <h4>{designation}</h4>
        <a href={link} target="_blank" rel="noreferrer">
          @ {company}
        </a>
        <p>{description}</p>
      </div>
    </motion.div>
  );
}
