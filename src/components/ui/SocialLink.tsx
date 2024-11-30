import React from 'react';
import { motion } from 'framer-motion';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl transition-all"
    aria-label={label}
  >
    <span className="text-gray-700 dark:text-gray-200">{icon}</span>
  </motion.a>
);