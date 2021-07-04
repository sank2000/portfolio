import React, { Fragment, useEffect, useReducer, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

import { containerVariants, showcase } from '@/constants';
import { NavBar } from 'components';
import ProjectCard from './ProjectCard';
import ShowcaseCard from './ShowcaseCard';
import { projects } from 'constants/projects';
import { withAdditionalProps } from 'types';

export default function Projects({ page, exitLeft, setExitLeft }: withAdditionalProps) {
	const [active, setActive] = useState(0);
	const [show, setShow] = useState(false);
	const [showCase, setShowCase] = useReducer(old => !old, true);
	const intervalRef = useRef<any>(null);
	const PROJECT_COUNT = showcase.length;

	const setCurrent = () => {
		intervalRef.current = setInterval(() => {
			setActive((old: number) => {
				old = (old + 1) % PROJECT_COUNT;
				return old;
			});
		}, 5000);
	};

	useEffect(() => {
		setTimeout(() => {
			setShow(true);
			setCurrent();
		}, 1000);

		return () => {
			clearInterval(intervalRef.current);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
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
			key='projects'
			variants={containerVariants}
			initial={page.forward ? 'hiddenLeft' : 'hiddenRight'}
			animate='visible'
			exit={exitLeft.status ? 'exitLeft' : 'exitRight'}
		>
			<NavBar name='Projects' {...{ setExitLeft }} />

			<main className={classes.main}>
				{showCase ? (
					<section className={classes.showcase}>
						<div className={classes.gallery}>
							<div className={classes.slider_dot_container}>
								{[...Array(PROJECT_COUNT)].map((_, ind) => {
									return (
										<button
											onClick={() => handleClick(ind)}
											key={ind}
											style={{
												backgroundColor: active === ind ? '#fff' : 'rgb(187, 187, 187)',
												transform: active === ind ? 'scale(1.2)' : 'scale(1)'
											}}
											aria-label={`project-${ind + 1}`}
										>
											&nbsp;
										</button>
									);
								})}
							</div>
							{show && (
								<div
									className={classes.card_container}
									onMouseEnter={() => clearInterval(intervalRef.current)}
									onMouseLeave={() => setCurrent()}
									onTouchStart={() => clearInterval(intervalRef.current)}
									onTouchEnd={() => setCurrent()}
								>
									<AnimatePresence>
										{showcase.map((project, ind) => {
											return (
												<Fragment key={`${project.name}-${ind}`}>
													{active === ind && (
														<ShowcaseCard key={`${project.name}-${ind}`} {...project} />
													)}
												</Fragment>
											);
										})}
									</AnimatePresence>
								</div>
							)}
						</div>
						<div className={classes.btn_container}>
							{show && (
								<button onClick={setShowCase}>
									<span className='icon-arrow-right-circle'></span>Show more
								</button>
							)}
						</div>
					</section>
				) : (
					<section className={classes.more}>
						<div className={classes.project}>
							{projects.map(project => {
								return <ProjectCard key={project.name} {...project} />;
							})}
						</div>
						<div className={classes.btn_container}>
							<button onClick={setShowCase}>
								<span className='icon-arrow-left-circle'></span>
								Showcase
							</button>
						</div>
					</section>
				)}
			</main>
		</motion.div>
	);
}
