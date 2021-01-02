import React, { useState, useEffect, useRef } from 'react';
import classes from './style.module.scss';
import { motion } from 'framer-motion';

import { containerVariants } from '../../constants';

import Card from './Card';
import { AnimatePresence } from 'framer-motion';

import { react, firebase, mongodb, nodejs, pwa } from './Stack';

import { defaultProps } from '../../types';

export default function Projects({ page, setPage }: defaultProps) {
  const [exitLeft, setExitLeft] = useState(false);

  const [active, setActive] = useState(0);
  const intervalRef = useRef<any>(null);

  const setCurrent = () => {
    intervalRef.current = setInterval(() => {
      setActive((old: number) => {
        old = (old + 1) % 4;
        return old;
      });
    }, 5000);
  };

  useEffect(() => {
    setCurrent();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const handleClick = (ind: number) => {
    setActive(ind);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrent();
  };

  return (
    <motion.div
      key="projects"
      variants={containerVariants}
      initial={page.forward ? 'hiddenLeft' : 'hiddenRight'}
      animate="visible"
      exit={exitLeft ? 'exitLeft' : 'exitRight'}
    >
      <nav className={classes.nav}>
        <span
          className="icon-arrow"
          onClick={() => {
            setExitLeft(true);
            setPage({ no: 2, forward: false });
          }}
        ></span>
        <h3 className={classes.nav_head}>Projects</h3>
        <motion.span
          className="icon-arrow"
          onClick={() => setPage({ no: 4, forward: true })}
          animate={{
            scale: [1, 1.3, 1, 1.3, 1],
            rotate: [90, 90, 90, 90, 90],
            transition: {
              yoyo: Infinity,
              duration: 2,
            },
          }}
        ></motion.span>
      </nav>
      <main className={classes.main}>
        <div className={classes.slider_dot_container}>
          <div
            onClick={() => handleClick(0)}
            style={{
              backgroundColor: active === 0 ? '#fff' : 'rgb(187, 187, 187)',
              transform: active === 0 ? 'scale(1.3)' : 'scale(1)',
            }}
          >
            &nbsp;
          </div>
          <div
            onClick={() => handleClick(1)}
            style={{
              backgroundColor: active === 1 ? '#fff' : 'rgb(187, 187, 187)',
              transform: active === 1 ? 'scale(1.3)' : 'scale(1)',
            }}
          >
            &nbsp;
          </div>
          <div
            onClick={() => handleClick(2)}
            style={{
              backgroundColor: active === 2 ? '#fff' : 'rgb(187, 187, 187)',
              transform: active === 2 ? 'scale(1.3)' : 'scale(1)',
            }}
          >
            &nbsp;
          </div>
          <div
            onClick={() => handleClick(3)}
            style={{
              backgroundColor: active === 3 ? '#fff' : 'rgb(187, 187, 187)',
              transform: active === 3 ? 'scale(1.3)' : 'scale(1)',
            }}
          >
            &nbsp;
          </div>
        </div>
        <div
          className={classes.card_container}
          onMouseEnter={() => clearInterval(intervalRef.current)}
          onMouseLeave={() => setCurrent()}
          onTouchStart={() => clearInterval(intervalRef.current)}
          onTouchEnd={() => setCurrent()}
        >
          <AnimatePresence exitBeforeEnter>
            {active === 0 && (
              <Card
                key="nviktous"
                name="nviktous"
                image="/nviktous.png"
                description="It is completely packed E-Commerce site with options like OAuth, OTP etc. which is build using MERN stack.It also contains admin panel where the seller
                        can handle the sales process"
                stack={[react, nodejs, mongodb, firebase]}
                link="https://nviktous.herokuapp.com/"
                github={null}
              />
            )}
            {active === 1 && (
              <Card
                key="college mate"
                name="college mate"
                image="/collegemate.png"
                description="A MERN stack Progressive Web App (PWA) built for students and teaching faculties to easily share materials, homework, assignments, and notes."
                stack={[react, nodejs, mongodb, firebase, pwa]}
                link="https://collegemate.herokuapp.com/"
                github={null}
              />
            )}
            {active === 2 && (
              <Card
                key="biller"
                name="biller"
                image="/biller.png"
                description=" It is MERN Stack application for online bill payment with payment methods like PayPal and Stripe."
                stack={[react, nodejs, mongodb]}
                link="https://san-biller.herokuapp.com/"
                github="https://github.com/sank2000/Biller"
              />
            )}
            {active === 3 && (
              <Card
                key="aubit"
                name="aubit"
                image="/aubit.png"
                description="The unofficial website of University College of Engineering, BIT Campus, Tiruchirappalli. The website is still under development and will be approved upon completion to be the official website. Built with React."
                stack={[react, nodejs]}
                link="https://aubit.netlify.app/"
                github={null}
              />
            )}
          </AnimatePresence>
        </div>
      </main>
    </motion.div>
  );
}
