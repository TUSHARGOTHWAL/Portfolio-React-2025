import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Import your logo images here
import reactLogo from '../assets/react.svg';
import google_cloud from '../assets/google-cloud.svg';
import c from '../assets/c.svg';
import css from '../assets/css.svg';
import html from '../assets/html.svg';
import node from '../assets/node.svg';
import figma from '../assets/figma.svg';
import firebase from '../assets/firebase.svg';
import framer from '../assets/framer.svg';
import github from '../assets/github.svg';

const logos = [
  { src: reactLogo, alt: 'React' },
  { src: google_cloud, alt: 'HTML' },
  {src: c, alt: 'C'},
  {src: css, alt: 'CSS'},
  {src: html, alt: 'HTML'},
  {src: node, alt: 'Node'},
  {src: figma, alt: 'Figma'},
  {src: firebase, alt: 'Firebase'},
  {src: framer, alt: 'Framer'},
  {src: github, alt: 'Github'},
  

];

const MovingLogo = ({ logo, index }) => {
  const controls = useAnimation();
  const logoRef = useRef(null);
  const [position, setPosition] = useState({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight });
  const [velocity, setVelocity] = useState({ x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 });

  useEffect(() => {
    const animateLogo = () => {
      let newX = position.x + velocity.x;
      let newY = position.y + velocity.y;

      // Bounce off the edges
      if (newX <= 0 || newX >= window.innerWidth - 80) {
        setVelocity(prev => ({ ...prev, x: -prev.x }));
        newX = Math.max(0, Math.min(newX, window.innerWidth - 80));
      }
      if (newY <= 0 || newY >= window.innerHeight - 80) {
        setVelocity(prev => ({ ...prev, y: -prev.y }));
        newY = Math.max(0, Math.min(newY, window.innerHeight - 80));
      }

      setPosition({ x: newX, y: newY });
      controls.start({ x: newX, y: newY, transition: { duration: 0.01, ease: "linear" } });
    };

    const interval = setInterval(animateLogo, 16); // ~60 fps

    return () => clearInterval(interval);
  }, [controls, position, velocity]);

  return (<>
    <motion.img
      ref={logoRef}
      key={index}
      src={logo.src}
      alt={logo.alt}
      className="absolute w-28 h-24 opacity-30"
      animate={controls}
      initial={{ x: position.x, y: position.y }}
      style={{ x: position.x, y: position.y }}
      />
  
      </>
  );
};

const MovingLogos = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {logos.map((logo, index) => (
        <MovingLogo key={index} logo={logo} index={index} />
      ))}
    </div>
  );
};

export default MovingLogos;

