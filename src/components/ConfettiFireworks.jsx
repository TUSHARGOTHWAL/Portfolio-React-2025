import React, { forwardRef, useImperativeHandle } from "react";
import confetti from "canvas-confetti";

// Create the ConfettiFireworks component
const ConfettiFireworks = forwardRef((props, ref) => {
  const triggerConfetti = () => {
    const duration = 5000; // 5 seconds
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  // Expose the triggerConfetti function via the ref
  useImperativeHandle(ref, () => ({
    trigger: triggerConfetti,
  }));

  return null; // No UI needed for this component
});

export default ConfettiFireworks;
