'use client';
import { motion } from 'framer-motion';
import { FiMapPin, FiMonitor, FiBook, FiAward } from 'react-icons/fi';
import { SiLeagueoflegends } from 'react-icons/si';


const About = () => {
  // const canvasRef = useRef<HTMLCanvasElement>(null);

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   if (!canvas) return;
  //   const ctx = canvas.getContext('2d');
  //   if (!ctx) return;

  //   const dots = Array.from({ length: 50 }, () => ({
  //     x: Math.random() * canvas.width,
  //     y: Math.random() * canvas.height,
  //     vx: (Math.random() - 0.5) * 0.5,
  //     vy: (Math.random() - 0.5) * 0.5,
  //   }));

  //   const draw = () => {
  //     ctx.clearRect(0, 0, canvas.width, canvas.height);
  //     dots.forEach(dot => {
  //       dot.x += dot.vx;
  //       dot.y += dot.vy;

  //       if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
  //       if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

  //       ctx.beginPath();
  //       ctx.arc(dot.x, dot.y, 2, 0, Math.PI * 2);
  //       ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  //       ctx.fill();

  //       dots.forEach(otherDot => {
  //         const distance = Math.hypot(dot.x - otherDot.x, dot.y - otherDot.y);
  //         if (distance < 100) {
  //           ctx.beginPath();
  //           ctx.moveTo(dot.x, dot.y);
  //           ctx.lineTo(otherDot.x, otherDot.y);
  //           ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  //           ctx.stroke();
  //         }
  //       });
  //     });
  //     requestAnimationFrame(draw);
  //   };

  //   draw();
  // }, []);

  return (
    <section id="about" className="py-20 min-h-screen flex items-center relative">
      {/* <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" /> */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 h-full"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800 h-[calc(50%-12px)]">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Personal Profile
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FiMapPin className="text-blue-500 text-xl" />
                  <p className="text-gray-600 dark:text-gray-300">
                    Based in Baramati, India
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <FiAward className="text-blue-500 text-xl" />
                  <p className="text-gray-600 dark:text-gray-300">
                    20 years old | Aspiring Developer
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800 h-[calc(50%-12px)]">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Academic Achievements
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">University (Current)</span>
                  <span className="text-blue-500 font-semibold">9.07/10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">12th Grade</span>
                  <span className="text-blue-500 font-semibold">88.17%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">10th Grade</span>
                  <span className="text-blue-500 font-semibold">93.4%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 h-full"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800 h-[calc(50%-12px)]">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Professional Interests
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate about exploring and implementing cutting-edge AI technologies. 
                I actively stay updated with the latest AI tools and developments in the market, 
                focusing on practical applications and innovative solutions.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800 h-[calc(50%-12px)]">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                Interests & Hobbies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <FiMonitor className="text-blue-500 text-xl" />
                  <p className="text-gray-600 dark:text-gray-300">Series & Movies</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FiBook className="text-blue-500 text-xl" />
                  <p className="text-gray-600 dark:text-gray-300">Anime</p>
                </div>
                <div className="flex items-center space-x-3">
                  <SiLeagueoflegends className="text-blue-500 text-xl" />
                  <p className="text-gray-600 dark:text-gray-300">League of Legends</p>
                </div>
                <div className="flex items-center space-x-3">
                  <FiBook className="text-blue-500 text-xl" />
                  <p className="text-gray-600 dark:text-gray-300">Stock market and financial analysis</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 