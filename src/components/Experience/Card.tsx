// Card.tsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

import { cardVariants } from '@/constants';
import { experienceProps } from 'types';

export default function Card({
	id,
	designation,
	from,
	to,
	description,
	company,
	link
}: experienceProps) {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const isLeftCard = screenWidth < 550 ? false : id % 2 === 0;

	const renderDescription = () => {
		if (Array.isArray(description)) {
			return (
				<ul className={classes.descriptionList}>
					{description.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			);
		}
		return <p>{description}</p>;
	};

	return (
		<motion.div
			variants={cardVariants}
			initial='hidden'
			animate='visible'
			exit='exit'
			transition={{
				...cardVariants.visible.transition
			}}
			className={classes.experience__row}
		>
			<div className={`${classes.experience__slot} ${classes.experience__slot_left}`}>
				{isLeftCard && (
					<div className={classes.details__container}>
						<div className={classes.timeline__duration_enhanced}>
							<span className={classes.duration_icon}></span>
							<h2>
								{from} &ndash; {to}
							</h2>
						</div>
						<h4>{designation}</h4>
						<a href={link} target='_blank' rel='noreferrer' className={classes.companyLink}>
							{company}
						</a>
						{renderDescription()}
					</div>
				)}
			</div>

			<div className={classes.experience__gutter}>
				<div className={classes.timeline_dot}></div>
			</div>

			<div className={`${classes.experience__slot} ${classes.experience__slot_right}`}>
				{!isLeftCard && (
					<div className={classes.details__container}>
						<div className={classes.timeline__duration_enhanced}>
							<span className={classes.duration_icon}></span>
							<h2>
								{from} &ndash; {to}
							</h2>
						</div>
						<h4>{designation}</h4>
						<a href={link} target='_blank' rel='noreferrer' className={classes.companyLink}>
							{company}
						</a>
						{renderDescription()}
					</div>
				)}
			</div>
		</motion.div>
	);
}
