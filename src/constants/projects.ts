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
    name: 'bonafide Generator',
    image: '/images/projects/bonafideGenerator.png',
    description:
      'A MERN Stack application for a student to obtain an online bonafide certificate. It also contains a staff panel where they can review student requests.',
    stack: [react, nodejs, mongodb, pwa],
    link: 'https://bonafide-generator.netlify.app/',
    github: 'https://github.com/sank2000/bonafide-generator',
  },
  {
    name: 'nviktous',
    image: '/images/projects/nviktous.png',
    description:
      'It is a completely packed E-Commerce site with options like OAuth, OTP, etc. which is build using the MERN stack. It also contains an admin panel where the seller can handle the sales process.',
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
      'It is MERN Stack application for online bill payment with payment methods like PayPal and Stripe. It also contains owner panel where they can track the bill.',
    stack: [react, nodejs, mongodb],
    link: 'https://san-biller.herokuapp.com/',
    github: 'https://github.com/sank2000/Biller',
  },
];

export { showcase };
