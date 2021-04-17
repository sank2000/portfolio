import React from 'react';

import classes from './style.module.scss';

export default function Contact() {
  return (
    <div>
      <h4>
        Wanna interact or work with me ? Drop a message .My inbox is always open
        for you.
      </h4>
      <div className={classes.links}>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/santhosh-k-589203178/"
        >
          <span className="icon-linkedin"></span>
        </a>
        <a target="_blank" href="https://twitter.com/santhoshvelr">
          <span className="icon-twitter"></span>
        </a>
        <a target="_blank" href="mailto:santhoshvelr@gmail.com">
          <span className="icon-gmail"></span>
        </a>
        <a target="_blank" href="https://github.com/sank2000">
          <span className="icon-github1"></span>
        </a>
      </div>
    </div>
  );
}
