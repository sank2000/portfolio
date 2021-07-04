import React from 'react';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

import { NavBar } from 'components';
import { containerVariants } from '@/constants';
import { withAdditionalProps } from 'types';

export default function About({ page, exitLeft, setExitLeft }: withAdditionalProps) {
	const points = [
		'I am from the so-called "Mango City", Salem.',
		'I am passionate about coding & designing, inquisitive in exploring new technologies to solve real-life problems',
		'I love working with people as a team and I am a good team player too',
		'Ready to give a shot to everything, I wanted in life.',
		'I spend my free time scrolling social media, listening to songs, and dancing.'
	];

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
						<h2>Hi</h2>
						<img src='/images/hi.gif' alt='hi' />
					</div>

					<h3>
						I am <span className={classes.name}>Santhosh</span> shortly{' '}
						<span className={classes.short_name}>San </span>
						doing my bachelor&apos;s degree in University College of Engineering, Trichy
					</h3>

					<ul>
						{points.map((point, ind) => {
							return (
								<li key={ind}>
									<img src='/images/logo/logo white.svg' alt='logo' />
									{point}
								</li>
							);
						})}
					</ul>
				</div>
				<div className={classes.main__right}>
					<div>
						<img src='/images/professional san darkbg.png' alt='me' />
					</div>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://drive.google.com/file/d/1yJKO8J9rYKVmrRLTG3kuaAkv64b3mpLK/view?usp=sharing'
					>
						CV
					</a>
				</div>
			</main>
		</motion.div>
	);
}
