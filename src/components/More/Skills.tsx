import React, { ReactChild, ReactChildren } from 'react';

import classes from './style.module.scss';

export default function Skills() {
  return (
    <>
      <div className={classes.icon_container}>
        <Skill icon="icon-html5"></Skill>
        <Skill icon="icon-css3"></Skill>
        <Skill icon="icon-sass"></Skill>
        <Skill icon="icon-styled-components"></Skill>
        <Skill icon="icon-javascript"></Skill>
        <Skill icon="icon-typescript"></Skill>
        <Skill icon="icon-react"></Skill>
        <Skill icon="icon-next-dot-js" title="next.js"></Skill>
        <Skill icon="icon-redux"></Skill>
        <Skill icon="icon-figma"></Skill>
        <Skill icon="icon-node-dot-js" title="node.js"></Skill>
        <Skill icon="icon-express"></Skill>
        <Skill icon="icon-graphql"></Skill>
        <Skill icon="icon-apollo"></Skill>
        <Skill icon="icon-sequelize">
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
        </Skill>
        <Skill icon="icon-jest"></Skill>
        <Skill icon="icon-docker"></Skill>
      </div>
      <div className={classes.icon_container}>
        <Skill icon="icon-mongodb"></Skill>
        <Skill icon="icon-mysql"></Skill>
        <Skill icon="icon-postgresql"></Skill>
        <Skill icon="icon-firebase"></Skill>
      </div>
      <div className={classes.icon_container}>
        <Skill icon="icon-java"></Skill>
        <Skill icon="icon-python"></Skill>
        <Skill icon="icon-c"></Skill>
        <Skill icon="icon-cplusplus" title="C++"></Skill>
      </div>
    </>
  );
}

function Skill({
  title,
  icon,
  children,
}: {
  title?: string;
  icon: string;
  children?: React.ReactNode | ReactChild | ReactChildren;
}) {
  return (
    <span className={icon}>
      {children && children}
      <span className={classes.description}>
        {title ?? icon.split('-').slice(1).join(' ').replace('dot', '')}
      </span>
    </span>
  );
}
