import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

import { containerVariants, experience } from '@/constants';
import { experienceProps, withAdditionalProps } from 'types';
import Card from './Card';
import { NavBar } from 'components';

export default function Experience({ page, exitLeft, setExitLeft }: withAdditionalProps) {
	const [show, setShow] = useState(false);
	const mainRef = useRef<HTMLDivElement>(null);

	const updateTimelineHeight = () => {
		if (mainRef.current) {
			const totalHeight = mainRef.current.scrollHeight;
			mainRef.current.style.setProperty('--total-scroll-height', `${totalHeight}px`);
		}
	};

	useEffect(() => {
		updateTimelineHeight();

		window.addEventListener('resize', updateTimelineHeight);

		const observer = new MutationObserver(updateTimelineHeight);
		if (mainRef.current) {
			observer.observe(mainRef.current, { childList: true, subtree: true, attributes: true });
		}

		return () => {
			window.removeEventListener('resize', updateTimelineHeight);
			observer.disconnect();
		};
	}, [show]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShow(true);
		}, 1000);

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<motion.div
			key='experience'
			variants={containerVariants}
			initial={page.forward ? 'hiddenLeft' : 'hiddenRight'}
			animate='visible'
			exit={exitLeft.status ? 'exitLeft' : 'exitRight'}
		>
			<NavBar name='Experience' {...{ setExitLeft }} />

			{show && (
				<main className={classes.main} ref={mainRef}>
					<div className={classes.experience}>
						{experience.map((data: experienceProps, ind) => {
							return <Card {...data} key={`${data.company}-${ind}`} />;
						})}
					</div>
				</main>
			)}
		</motion.div>
	);
}
