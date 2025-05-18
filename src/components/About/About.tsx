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
			<NavBar name='<About me />' {...{ setExitLeft }} />

			<main className={classes.main}>
				<div className={classes.main__left}>
					<div>
						<h2>Hi there!</h2>
					</div>

					<h3>
						I&#39;m <span className={classes.name}>Santhosh</span> (or{' '}
						<span className={classes.short_name}>San</span>), a Software Developer at Zoho Corp.
					</h3>

					<h4>
						I&#39;m a passionate full-stack developer who thrives on building sleek,
						high-performance web applications. I specialize in creating smooth, intuitive user
						experiences while ensuring systems are efficient and scalable.
					</h4>
					<h4>
						Whether it’s optimizing backend performance or crafting clean, responsive frontends, I’m
						always eager to learn, experiment, and tackle new challenges. I love collaborating on
						innovative projects that push boundaries and fuel creativity.
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
