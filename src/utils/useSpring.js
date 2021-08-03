import { useSpring } from 'react-spring';

export const ConfigSpring = (style) => useSpring({
  to: { transform: style },
  config: {
    mass: 1,
    tension: 30,
    friction: 5,
    clamp: false,
  },
});