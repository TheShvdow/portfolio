import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Smartphone, Database, FileCode2, Github } from 'lucide-react';

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold mb-6">Full-Stack Developer</h1>
          <p className="text-xl text-gray-300 mb-8">
            Crafting robust and scalable solutions across the entire development stack
          </p>
          <div className="flex justify-center space-x-6">
            <TechIcon Icon={Code2} label="Frontend" />
            <TechIcon Icon={Terminal} label="Backend" />
            <TechIcon Icon={Smartphone} label="Mobile" />
            <TechIcon Icon={Database} label="Database" />
            <TechIcon Icon={FileCode2} label="API" />
            <TechIcon Icon={Github} label="DevOps" />
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

const TechIcon = ({ Icon, label }: { Icon: React.ElementType; label: string }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex flex-col items-center"
  >
    <div className="bg-gray-700 p-3 rounded-lg mb-2">
      <Icon className="w-6 h-6" />
    </div>
    <span className="text-sm">{label}</span>
  </motion.div>
);