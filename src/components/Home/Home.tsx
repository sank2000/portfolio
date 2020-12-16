import React from 'react';
import classes from './style.module.scss';

export default function Home() {
  return (
    <section className={classes.section}>
      <nav className={classes.nav}>
        <div className={classes.nav_brand}>S</div>
        <ul className={classes.nav_links}>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className={classes.main}>
        <h2>Hi there. I'm </h2>
        <h1>SAN </h1>
      </main>
      <footer className={classes.footer}>
        <span className="icon-arrow"></span>
      </footer>
    </section>
  );
}
