import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import classes from './style.module.scss';

import { containerVariants } from '@/constants';
import { withAdditionalProps } from 'types';

export default function Home({ page, setPage, setExitLeft, isPageLoading }: withAdditionalProps) {
	const [description, setDescription] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(0);
	const [typingSpeed, setTypingSpeed] = useState(150);
	const period = 2000;
	const descriptions = useMemo(() => ['< Full stack developer />', '< Tech Enthusiast />'], []);
	const [hasStarted, setHasStarted] = useState(false);

	useEffect(() => {
		if (!hasStarted) return;

		const handleTyping = () => {
			const i = currentDescriptionIndex % descriptions.length;
			const fullText = descriptions[i];

			setDescription(prev =>
				isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
			);

			setTypingSpeed(isDeleting ? 75 : 150);

			if (!isDeleting && description === fullText) {
				setTimeout(() => setIsDeleting(true), period);
			} else if (isDeleting && description.length === 1) {
				setIsDeleting(false);
				setCurrentDescriptionIndex(currentDescriptionIndex + 1);
			}
		};

		const timer = setTimeout(handleTyping, typingSpeed);
		return () => clearTimeout(timer);
	}, [description, isDeleting, typingSpeed, currentDescriptionIndex, descriptions, hasStarted]);

	useEffect(() => {
		if (isPageLoading) return;
		const startTimer = setTimeout(() => {
			setHasStarted(true);
		}, 1000);

		return () => clearTimeout(startTimer);
	}, [isPageLoading]);

	return (
		<motion.div
			key='home'
			className={classes.home}
			variants={containerVariants}
			initial={page.forward ? 'hiddenLeft' : 'hiddenRight'}
			animate='visible'
			exit='exitRight'
		>
			<nav className={classes.nav}>
				<div className={classes.nav_brand}>
					<img src='/images/logo/logo white.svg' alt='logo' />
				</div>
				<ul className={classes.nav_links}>
					<li>
						<button onClick={() => setPage({ no: 2, forward: true })}>
							<code>
								&lt;About <span>/</span>&gt;
							</code>
						</button>
					</li>
					<li>
						<button onClick={() => setPage({ no: 3, forward: true })}>
							<code>
								&lt;Experience <span>/</span>&gt;
							</code>
						</button>
					</li>
					<li>
						<button onClick={() => setPage({ no: 4, forward: true })}>
							<code>
								&lt;Projects <span>/</span>&gt;
							</code>
						</button>
					</li>
					<li>
						<button onClick={() => setPage({ no: 5, forward: true })}>
							<code>
								&lt;Skills <span>/</span>&gt;
							</code>
						</button>
					</li>
				</ul>
			</nav>
			<main className={classes.main}>
				<div className={classes.main_brand}>
					<img src='/images/logo/logo white.svg' alt='logo' />
				</div>
				<h1>Hi, I am</h1>
				<h2>
					<span>San</span>thosh
				</h2>
				<h1>
					{description
						? description
								.split('')
								.map((char, index) =>
									char === '/' ? (
										<span key={`slash-${index}`}>/</span>
									) : (
										<React.Fragment key={`char-${index}`}>{char}</React.Fragment>
									)
								)
						: '\u00A0'}

					<span className={classes.cursor} />
				</h1>
			</main>
			<footer className={classes.footer}>
				<motion.button
					onClick={() =>
						setExitLeft({
							status: false
						})
					}
					animate={{
						scale: [1, 1.3, 1, 1.3, 1],
						rotate: [90, 90, 90, 90, 90],
						transition: {
							yoyo: Infinity,
							duration: 2
						}
					}}
				>
					<span className='icon-arrow' aria-label='next'></span>
				</motion.button>
			</footer>
			<div className={classes.contact}>
				<a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/santhosh-dev/'>
					<span className='icon-linkedin'></span>
				</a>
				<a target='_blank' rel='noreferrer' href='mailto:santhoshvelr@gmail.com'>
					<span className='icon-mail'></span>
				</a>
				<a target='_blank' rel='noreferrer' href='https://www.instagram.com/santhosh_aka_san/'>
					<span className='icon-instagram'></span>
				</a>
			</div>
		</motion.div>
	);
}
