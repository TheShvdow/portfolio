import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "Node.js", "Express.js"],
    color: "from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700"
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "TypeScript", "Tailwind CSS"],
    color: "from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700"
  },
  {
    title: "Mobile",
    skills: ["Flutter", "Dart", "Mobile UI/UX"],
    color: "from-green-500 to-green-600 dark:from-green-600 dark:to-green-700"
  },
  {
    title: "Base de données",
    skills: ["PostgreSQL", "MySQL", "Firebase", "Neon"],
    color: "from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700"
  },
  {
    title: "DevOps",
    skills: ["Docker", "Git", "CI/CD", "Cloud Deployment"],
    color: "from-red-500 to-red-600 dark:from-red-600 dark:to-red-700"
  }
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Compétences Techniques</h2>
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-r ${category.color} p-6 rounded-lg text-white shadow-lg`}
            >
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};