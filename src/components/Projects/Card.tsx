import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

import { stackProps } from 'types';
import { cardVariants } from '@/constants';

interface cardProps {
  name: string;
  image: string;
  description: String;
  stack: Array<stackProps>;
  link: any;
  github: any;
}

export default function Card({
  name,
  image,
  description,
  stack,
  link,
  github,
}: cardProps) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={classes.card}
      key={name}
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
          <a target="_blank" href={link}>
            LIVE DEMO
          </a>
          {github !== null && <a href={github}>GITHUB</a>}
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
                #{val.name}
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
}
