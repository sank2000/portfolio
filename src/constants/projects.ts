import { firebase, mongodb, nodejs, pwa, react } from 'components/Projects/Stack';
import { projectProps } from 'types';

const showcase: Array<projectProps> = [
	{
		name: 'bonafide Generator',
		image: '/images/projects/bonafideGenerator.png',
		description:
			'A MERN Stack application for a student to obtain an online bonafide certificate. It also contains a staff panel where they can review student requests.',
		stack: [react, nodejs, mongodb, pwa],
		link: 'https://bonafide-generator.netlify.app/',
		github: 'https://github.com/sank2000/bonafide-generator'
	},
	{
		name: 'nviktous',
		image: '/images/projects/nviktous.png',
		description:
			'It is a completely packed E-Commerce site with options like OAuth, OTP, etc. which is build using the MERN stack. It also contains an admin panel where the seller can handle the sales process.',
		stack: [react, nodejs, mongodb, firebase],
		link: 'https://nviktous.herokuapp.com/',
		github: 'https://github.com/sank2000/nviktous'
	},
	{
		name: 'college mate',
		image: '/images/projects/collegemate.png',
		description:
			'A MERN stack Progressive Web App (PWA) built for students and teaching faculties to easily share materials, homework, assignments, and notes.',
		stack: [react, nodejs, mongodb, firebase, pwa],
		link: 'https://collegemate.herokuapp.com/',
		github: 'https://github.com/sank2000/clg-mate-app'
	},
	{
		name: 'biller',
		image: '/images/projects/biller.png',
		description:
			'It is MERN Stack application for online bill payment with payment methods like PayPal and Stripe. It also contains owner panel where they can track the bill.',
		stack: [react, nodejs, mongodb],
		link: 'https://san-biller.herokuapp.com/',
		github: 'https://github.com/sank2000/Biller'
	}
];

const projects: Array<projectProps> = [
	{
		name: 'aubit',
		image:
			'https://raw.githubusercontent.com/Infinite-Loop-Club/AUBIT/master/public/images/logo-maroon.png',
		description:
			'The unofficial website of University College of Engineering, BIT Campus, Tiruchirappalli. The website is still under development and will be approved upon completion to be the official website. Built with React.',
		stack: [react],
		link: 'https://aubit.netlify.app/',
		github: 'https://github.com/Infinite-Loop-Club/AUBIT'
	},
	{
		name: 'Infinite Loop Club',
		image: 'https://raw.githubusercontent.com/Infinite-Loop-Club/club-site/main/public/logo.png',
		description: 'The official site of Infinite loop club of Anna University, Trichy.',
		stack: [react, nodejs, mongodb],
		link: 'https://infinite-loop-club.netlify.app/',
		github: 'https://github.com/Infinite-Loop-Club/club-site'
	},
	{
		name: '7Days - 50Projects',
		image: 'https://raw.githubusercontent.com/benxene/7days-50projects/master/public/favicon.png',
		description:
			'This is a derivative of 50days50projects which is a course consisting of 50 mini projects produced by Brad Traversy and Florin Pop. Me and my colleages designed and built it on Next JS, Styled Components and TypeScript.',
		stack: [{ name: 'next.js' }],
		link: 'https://7days50projects.vercel.app/',
		github: 'https://github.com/benxene/7days-50projects'
	},
	{
		name: 'Zosime Tech',
		image: 'https://raw.githubusercontent.com/ZOSIME-tech/website/master/img/logo/logo-white.png',
		description: 'The official landing site of Zosime Tech built with the power of HTML and CSS.',
		stack: [{ name: 'HTML' }, { name: 'SASS' }, { name: 'JS' }],
		link: 'https://zosime-tech.github.io/website/',
		github: 'https://github.com/ZOSIME-tech/website'
	},
	{
		name: 'class-scheduler',
		image: 'https://raw.githubusercontent.com/benxene/blobs/main/schedule.png',
		description: 'A zero dependency class time-table manager.',
		stack: [{ name: 'typescript' }, { name: 'package' }],
		link: 'https://www.npmjs.com/package/class-scheduler',
		github: 'https://github.com/benxene/class-scheduler'
	},
	{
		name: 'dictionary',
		image: 'https://raw.githubusercontent.com/sank2000/dictionary/main/app/assets/icon.png',
		description:
			'A simple free and open-source dictionary app that uses the API created by Meet Developer.',
		stack: [{ name: 'react-native' }],
		link: 'https://drive.google.com/file/d/10lBOgfztLjOEEAEz3tznIPoYOVWrqzWt/view',
		github: 'https://github.com/sank2000/dictionary'
	}
];

export { showcase, projects };
