import React from 'react';

import classes from './style.module.scss';

import { projectProps } from 'types';

export default function Card({
  name,
  image,
  description,
  stack,
  link,
  github,
}: projectProps) {
  return (
    <div className={classes.project_card} key={name + link}>
      <div className={classes.project_card_top}>
        <div className={classes.logo}>
          <img src={image} alt="project logo" />
        </div>
        <div className={classes.link_container}>
          {link && (
            <a target="_blank" rel="noreferrer" href={link}>
              <span className="icon-external-link"></span>
            </a>
          )}
          {github && (
            <a target="_blank" rel="noreferrer" href={github}>
              <span className="icon-github"></span>
            </a>
          )}
        </div>
      </div>
      <div className={classes.project_card_content}>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <ul>
          {stack.map((val, ind) => {
            return <li key={ind}>{val.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
