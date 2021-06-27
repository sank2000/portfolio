import { projectProps } from 'types';
import {
  react,
  nodejs,
  mongodb,
  firebase,
  pwa,
} from 'components/Projects/Stack';

const showcase: Array<projectProps> = [
  {
    name: 'nviktous',
    image: '/images/projects/nviktous.png',
    description:
      'It is completely packed E-Commerce site with options like OAuth, OTP etc. which is build using MERN stack.It also contains admin panel where the seller can handle the sales process',
    stack: [react, nodejs, mongodb, firebase],
    link: 'https://nviktous.herokuapp.com/',
  },
  {
    name: 'college mate',
    image: '/images/projects/collegemate.png',
    description:
      'A MERN stack Progressive Web App (PWA) built for students and teaching faculties to easily share materials, homework, assignments, and notes.',
    stack: [react, nodejs, mongodb, firebase, pwa],
    link: 'https://collegemate.herokuapp.com/',
  },
  {
    name: 'biller',
    image: '/images/projects/biller.png',
    description:
      ' It is MERN Stack application for online bill payment with payment methods like PayPal and Stripe.',
    stack: [react, nodejs, mongodb],
    link: 'https://san-biller.herokuapp.com/',
    github: 'https://github.com/sank2000/Biller',
  },
  {
    name: 'aubit',
    image: '/images/projects/aubit.png',
    description:
      'The unofficial website of University College of Engineering, BIT Campus, Tiruchirappalli. The website is still under development and will be approved upon completion to be the official website. Built with React.',
    stack: [react, nodejs],
    link: 'https://aubit.netlify.app/',
    github: null,
  },
];

export { showcase };
