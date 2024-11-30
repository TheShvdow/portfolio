import React from 'react';
import { motion } from 'framer-motion';

export const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex-1 relative"
    >
      <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
        <div className="absolute inset-0 rounded-full animate-spin-slow">
          <div className="h-full w-full rounded-full border-2 border-dashed border-blue-500/20 dark:border-blue-400/20" />
        </div>
        <div className="absolute inset-4 rounded-full animate-spin-slow-reverse">
          <div className="h-full w-full rounded-full border-2 border-dashed border-indigo-500/20 dark:border-indigo-400/20" />
        </div>
        
        <div className="absolute inset-8">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full opacity-20 dark:opacity-40 blur-2xl" />
            <img
              src="https://github.com/TheShvdow/myportfolio/blob/main/assets/images/WhatsApp%20Image%202024-11-27%20at%2009.39.49.jpeg?raw=true"
              alt="IDRISSA WADE"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};