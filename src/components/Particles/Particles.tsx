import Particles from 'react-particles-js';

export default function Particle() {
  return (
    <Particles
      style={{ position: 'absolute' }}
      params={{
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 1,
            out_mode: 'out',
          },
          shape: {
            type: ['circle', 'image'],
            image: [
              {
                src: '/react.svg',
                height: 24,
                width: 24,
              },
              {
                src: '/figma.svg',
                height: 20,
                width: 16,
              },
              {
                src: '/mongodb.svg',
                height: 20,
                width: 23,
              },
              {
                src: '/mysql.svg',
                height: 30,
                width: 35,
              },
              {
                src: '/next-dot-js.svg',
                height: 25,
                width: 25,
              },
              {
                src: '/typescript.svg',
                height: 20,
                width: 20,
              },
              {
                src: '/nodejs.svg',
                height: 25,
                width: 25,
              },
              {
                src: '/graphql.svg',
                height: 25,
                width: 25,
              },
            ],
          },
          color: {
            value: 'rgba(255, 255, 255, 0.055)',
          },
          size: {
            value: 20,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
}
