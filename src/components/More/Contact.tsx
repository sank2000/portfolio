import React from 'react';

import classes from './style.module.scss';

export default function Contact() {
	return (
		<div className={classes.contact_body}>
			<h4>
				Interested in collaborating or just want to say hello<span>?</span>
			</h4>
			<h5>
				Feel free to reach out &mdash; I&apos;m always happy to connect<span>!</span>
			</h5>
			<div className={classes.links}>
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
		</div>
	);
}
