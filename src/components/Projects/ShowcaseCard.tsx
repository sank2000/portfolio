import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

import { projectProps } from 'types';
import { cardVariants } from '@/constants';

export default function Card({
  name,
  image,
  description,
  stack,
  link,
  github,
}: projectProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.card}
      key={name + link}
    >
      <div className={classes.card_left}>
        <div>
          <Image src={image} alt="project image" layout="fill" priority />
        </div>
        <h2>{name}</h2>
      </div>
      <div className={classes.card_right}>
        <h3>{description}</h3>
        <div className={classes.card_btn}>
          <a target="_blank" rel="noreferrer" href={link}>
            LIVE DEMO
          </a>
          {github !== null && (
            <a target="_blank" rel="noreferrer" href={github}>
              GITHUB
            </a>
          )}
        </div>
        <ul>
          {stack.map((val, ind) => {
            return (
              <li
                key={ind}
                style={{
                  backgroundColor: val.backgroundColor,
                  color: val.color,
                }}
              >
                {val.name}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}