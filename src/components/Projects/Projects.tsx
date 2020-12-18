import React from 'react';
import classes from './style.module.scss';

interface ProjectsProp {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Projects({ setPage }: ProjectsProp) {
  return (
    <section className={classes.section}>
      <nav className={classes.nav}>
        <span className="icon-arrow" onClick={() => setPage(2)}></span>
        <h3 className={classes.nav_head}>Projects</h3>
      </nav>
      <main className={classes.main}>&nbsp;</main>
      <footer className={classes.footer}>
        <span className="icon-arrow" onClick={() => setPage(4)}></span>
      </footer>
    </section>
  );
}
