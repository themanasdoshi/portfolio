'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Logo = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = position / height;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colors = {
    start: 'rgb(37, 99, 235)', // blue-600
    mid: 'rgb(236, 72, 153)', // pink-500
    end: 'rgb(139, 92, 246)', // violet-500
  };

  const currentColor = scrollProgress < 0.5
    ? interpolateColor(colors.start, colors.mid, scrollProgress * 2)
    : interpolateColor(colors.mid, colors.end, (scrollProgress - 0.5) * 2);

  return (
    <motion.div
      className="relative font-bold text-3xl"
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <span style={{ color: currentColor }} className="relative z-10">
        MD
      </span>
      <motion.div
        className="absolute -top-1 -left-1 w-full h-full bg-blue-200 dark:bg-blue-900 rounded-lg opacity-20"
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
};

// Helper function to interpolate between two colors
function interpolateColor(color1: string, color2: string, factor: number) {
  const c1 = color1.match(/\d+/g)?.map(Number) || [0, 0, 0];
  const c2 = color2.match(/\d+/g)?.map(Number) || [0, 0, 0];
  
  const r = Math.round(c1[0] + (c2[0] - c1[0]) * factor);
  const g = Math.round(c1[1] + (c2[1] - c1[1]) * factor);
  const b = Math.round(c1[2] + (c2[2] - c1[2]) * factor);
  
  return `rgb(${r}, ${g}, ${b})`;
}

export default Logo; 