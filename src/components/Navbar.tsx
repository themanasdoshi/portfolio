'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Logo from './Logo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-16">
          {/* Logo - Left */}
          <div className="flex-shrink-0 mr-8">
            <Link href="#" className="hover:opacity-80 transition-opacity duration-300">
              <Logo />
            </Link>
          </div>
          
          {/* Navigation - Center */}
          <div className="flex-1 hidden md:flex items-center justify-center">
            <div className="flex items-center space-x-16">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#skills">Skills</NavLink>
            </div>
          </div>

          {/* Icons - Right */}
          <div className="flex items-center space-x-5">
            <SocialLink 
              href="https://github.com/themanasdoshi" 
              icon={<FiGithub size={22} />} 
              label="GitHub"
            />
            <SocialLink 
              href="https://linkedin.com/in/manas-doshi4114" 
              icon={<FiLinkedin size={22} />} 
              label="LinkedIn"
            />
            <SocialLink 
              href="mailto:manasdoshi999@gmail.com" 
              icon={<FiMail size={22} />} 
              label="Email"
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="group relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-lg font-medium"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out" />
  </Link>
);

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    {icon}
    <motion.span
      className="absolute inset-0 rounded-full bg-blue-500/10"
      initial={{ scale: 0 }}
      whileHover={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    />
  </motion.a>
);

export default Navbar; 