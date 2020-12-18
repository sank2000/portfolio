import React from 'react';
import classes from './style.module.scss';

interface AboutProp {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function About({ setPage }: AboutProp) {
  return (
    <section className={classes.section}>
      <nav className={classes.nav}>
        <span className="icon-arrow" onClick={() => setPage(1)}></span>
        <h3 className={classes.nav_head}>About</h3>
      </nav>
      <main className={classes.main}>&nbsp;</main>
      <footer className={classes.footer}>
        <span className="icon-arrow" onClick={() => setPage(3)}></span>
      </footer>
    </section>
  );
}
