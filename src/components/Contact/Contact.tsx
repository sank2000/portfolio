import React from 'react';
import classes from './style.module.scss';

interface ContactProp {
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Contact({ setPage }: ContactProp) {
  return (
    <section className={classes.section}>
      <nav className={classes.nav}>
        <span className="icon-arrow" onClick={() => setPage(3)}></span>
        <h3 className={classes.nav_head}>Contact</h3>
      </nav>
      <main className={classes.main}>&nbsp;</main>
    </section>
  );
}
