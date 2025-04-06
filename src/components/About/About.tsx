import React from 'react';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

import { NavBar } from 'components';
import { containerVariants } from '@/constants';
import { withAdditionalProps } from 'types';

export default function About({ page, exitLeft, setExitLeft }: withAdditionalProps) {
	return (
		<motion.div
			key='about'
			variants={containerVariants}
			initial={page.forward ? 'hiddenLeft' : 'hiddenRight'}
			animate='visible'
			exit={exitLeft.status ? 'exitLeft' : 'exitRight'}
		>
			<NavBar name='About' {...{ setExitLeft }} />

			<main className={classes.main}>
				<div className={classes.main__left}>
					<div>
						<h2>Hello Mate</h2>
						<img src='/images/hi.gif' alt='hi' />
						<h2>,</h2>
					</div>

					<h3>
						I am <span className={classes.name}>Santhosh</span> shortly{' '}
						<span className={classes.short_name}>San, </span> Software Developer at Zoho Corp.
					</h3>

					<h4>
						With a solid background in full-stack development, I specialize in building scalable and
						high-performance applications. I am passionate about developing innovative solutions
						that optimize system performance and drive efficiency. I always look forward to new
						opportunities to learn and grow.
					</h4>
				</div>
				<div className={classes.main__right}>
					<div>
						<img src='/images/personal_image.png' alt='me' />
					</div>
				</div>
			</main>
		</motion.div>
	);
}
