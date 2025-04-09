'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  const [showContact, setShowContact] = useState(false);
  const [answer, setAnswer] = useState('');

  const handleReveal = () => {
    if (parseInt(answer) === 13) {
      setShowContact(true);
    } else {
      alert('Try again!');
    }
  };

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Manas Doshi
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Software Developer | AI/ML Specialist
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Passionate about building efficient, innovative solutions with expertise in AI, Machine Learning, and Software Development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center"
        >
          {/* Removed View Projects button */}
        </motion.div>

        {showContact && (
          <div className="mt-8">
            <p className="text-gray-600 dark:text-gray-300 mb-4">Solve this to reveal contact details: 3 + 10 = ?</p>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="border p-2 rounded mb-4 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <button
              onClick={handleReveal}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Reveal
            </button>
            {parseInt(answer) === 13 && (
              <div className="mt-4">
                <p className="text-gray-600 dark:text-gray-300">Email: manasdoshi999@gmail.com</p>
                <p className="text-gray-600 dark:text-gray-300">Discord: doodle_quadra</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero; 