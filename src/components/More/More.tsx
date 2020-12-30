import React from 'react';
import classes from './style.module.scss';
import { motion } from 'framer-motion';

import { containerVariants } from '../../constants';

import { defaultProps } from '../../types';

export default function More({ page, setPage }: defaultProps) {
  return (
    <motion.div
      key="more"
      variants={containerVariants}
      initial={page.forward ? 'hiddenLeft' : 'hiddenRight'}
      animate="visible"
      exit="exitLeft"
    >
      <nav className={classes.nav}>
        <span
          className="icon-arrow"
          onClick={() => setPage({ no: 3, forward: false })}
        ></span>
      </nav>
      <main className={classes.main}>
        <div className={classes.skills}>
          <div className={classes.head}>
            <h3>Skills</h3>
          </div>
          <div className={classes.icon_container}>
            <span className="icon-html5"></span>
            <span className="icon-css3"></span>
            <span className="icon-sass"></span>
            <span className="icon-styled-components"></span>
            <span className="icon-javascript"></span>
            <span className="icon-typescript"></span>
            <span className="icon-react"></span>
            <span className="icon-next-dot-js"></span>
            <span className="icon-redux"></span>
            <span className="icon-figma"></span>
            <span className="icon-node-dot-js"></span>
            <span className="icon-express"></span>
            <span className="icon-graphql"></span>
            <span className="icon-apollo"></span>
            <span className="icon-sequelize">
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
              <span className="path4"></span>
              <span className="path5"></span>
              <span className="path6"></span>
              <span className="path7"></span>
              <span className="path8"></span>
              <span className="path9"></span>
              <span className="path10"></span>
              <span className="path11"></span>
              <span className="path12"></span>
              <span className="path13"></span>
              <span className="path14"></span>
              <span className="path15"></span>
              <span className="path16"></span>
              <span className="path17"></span>
              <span className="path18"></span>
              <span className="path19"></span>
              <span className="path20"></span>
              <span className="path21"></span>
              <span className="path22"></span>
              <span className="path23"></span>
              <span className="path24"></span>
              <span className="path25"></span>
              <span className="path26"></span>
              <span className="path27"></span>
            </span>
          </div>
          <div className={classes.icon_container}>
            <span className="icon-mongodb"></span>
            <span className="icon-mysql"></span>
            <span className="icon-postgresql"></span>
            <span className="icon-firebase"></span>
          </div>
          <div className={classes.icon_container}>
            <span className="icon-java"></span>
            <span className="icon-python"></span>
            <span className="icon-c"></span>
            <span className="icon-cplusplus"></span>
          </div>
        </div>
        <div className={classes.contact}>
          <div className={classes.head}>
            <h3>GET IN TOUCH</h3>
          </div>
          <div></div>
        </div>
      </main>
    </motion.div>
  );
}
