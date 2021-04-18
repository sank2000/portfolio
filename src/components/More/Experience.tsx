import React, { useState, useEffect, useRef } from 'react';

import classes from './style.module.scss';

import { experience } from '@/constants';
import { experienceProps } from 'types';

export default function Experience() {
  return (
    <div className={classes.experience}>
      {experience.map((data: experienceProps, ind) => {
        return <Card {...data} key={ind} />;
      })}
    </div>
  );
}

function Card({
  designation,
  from,
  to,
  description,
  company,
  link,
  stack,
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
    <div className={classes.experience__container} key={`${from}-${company}`}>
      <div className={classes.left__container}>
        <p>{from}</p>
        <div className={classes.icon__container}>
          <span className={`icon-${icon}`}></span>
        </div>
        <p>{to}</p>
      </div>
      <div className={classes.details__container}>
        <h4>{designation}</h4>
        <h6 style={{ cursor: 'pointer' }} onClick={() => window.open(link)}>
          @ {company}
        </h6>
        <p>{description}</p>
      </div>
    </div>
  );
}
