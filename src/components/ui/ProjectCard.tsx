import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  index: number;
}

export const ProjectCard = ({ title, description, tech, image, github, demo, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all group"
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
          >
            <Github className="w-5 h-5 text-white" />
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-colors"
          >
            <ExternalLink className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, techIndex) => (
            <span 
              key={techIndex}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};