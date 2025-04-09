'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    setMounted(true);
    
    // Check localStorage for theme preference
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // If theme is stored in localStorage, use that
    // Otherwise, use system preference
    const isDarkMode = storedTheme === 'dark' || (!storedTheme && prefersDark);
    
    setIsDark(isDarkMode);
    
    // Ensure DOM reflects the current theme
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    // Update localStorage and classList
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-gray-800 dark:to-gray-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: isDark ? 180 : 0,
          scale: isDark ? 1.1 : 1
        }}
        transition={{ 
          duration: 0.5,
          type: "spring",
          stiffness: 200
        }}
        className="relative z-10"
      >
        {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-full bg-white/20"
        initial={false}
        animate={{
          scale: isDark ? [1, 1.2, 1] : 1,
          opacity: isDark ? [0.5, 0.8, 0.5] : 0
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
};

export default ThemeToggle; 