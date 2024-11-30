import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  Icon: LucideIcon;
  label: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, Icon, label }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center gap-2"
  >
    <div className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300">
      <Icon className="w-6 h-6" />
    </div>
    <span className="text-sm font-medium">{label}</span>
  </motion.a>
);