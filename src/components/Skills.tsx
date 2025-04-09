'use client';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCpu, FiBox, FiTerminal, FiUsers } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Core Software Development',
    icon: <FiCode size={24} />,
    skills: ['Data Structures & Algorithms', 'OOP', 'Software Engineering']
  },
  {
    title: 'Technologies',
    icon: <FiDatabase size={24} />,
    skills: ['Google Cloud Platform', 'GitHub', 'DBMS', 'Web Development (HTML, CSS, JavaScript)']
  },
  {
    title: 'Computer Science Fundamentals',
    icon: <FiCpu size={24} />,
    skills: ['Computer Networks', 'Operating Systems', 'Database Management System']
  },
  {
    title: 'AI Knowledge',
    icon: <FiBox size={24} />,
    skills: ['Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Generative AI']
  },
  {
    title: 'Languages & Tools',
    icon: <FiTerminal size={24} />,
    skills: ['Python', 'Java', 'SQL', 'R', 'VS Code', 'IntelliJ IDEA', 'PyCharm', 'Git']
  },
  {
    title: 'Soft Skills',
    icon: <FiUsers size={24} />,
    skills: ['Public Speaking', 'Documentation', 'Team Leadership']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A comprehensive overview of my technical and professional capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 