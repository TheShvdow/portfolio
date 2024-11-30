import React from 'react';
import { motion } from 'framer-motion';

interface FloatingIconProps {
  icon: React.ElementType;
  className: string;
}

export const FloatingIcon = ({ icon: Icon, className }: FloatingIconProps) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{
      y: [0, -10, 0],
      rotate: [-5, 5, -5],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Icon className="w-8 h-8 text-blue-500/30 dark:text-blue-400/30" />
  </motion.div>
);