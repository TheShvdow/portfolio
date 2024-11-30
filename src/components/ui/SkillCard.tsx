import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  skills: string[];
  color: string;
  index: number;
}

export const SkillCard = ({ title, skills, color, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-gradient-to-r ${color} p-6 rounded-lg text-white shadow-lg`}
    >
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, skillIndex) => (
          <span
            key={skillIndex}
            className="px-3 py-1 bg-white/20 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};