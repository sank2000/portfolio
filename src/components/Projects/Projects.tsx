import React from 'react';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

import { NavBar } from 'components';
import ProjectCard from './ProjectCard';
import { containerVariants } from '@/constants';
import { projects } from 'constants/projects';
import { withAdditionalProps } from 'types';

export default function Projects({ page, exitLeft, setExitLeft }: withAdditionalProps) {
	return (
		<motion.div
			key='projects'
			variants={containerVariants}
			initial={page.forward ? 'hiddenLeft' : 'hiddenRight'}
			animate='visible'
			exit={exitLeft.status ? 'exitLeft' : 'exitRight'}
		>
			<NavBar name='Projects' {...{ setExitLeft }} />

			<main className={classes.main}>
				<section className={classes.more}>
					<div className={classes.project}>
						{projects.map(project => {
							return <ProjectCard key={project.name} {...project} />;
						})}
					</div>
				</section>
			</main>
		</motion.div>
	);
}
