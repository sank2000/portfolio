import Particles from 'react-particles-js';

export default function Particle() {
  return (
    <Particles
      style={{ position: 'absolute' }}
      params={{
        particles: {
          number: {
            value: 8,
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
            type: ['image', 'circle'],
            image: [
              {
                src: '/figma.svg',
                height: 20,
                width: 23,
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
                height: 20,
                width: 20,
              },
              {
                src: '/react.svg',
                height: 20,
                width: 20,
              },
              {
                src: '/typescript.svg',
                height: 20,
                width: 20,
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