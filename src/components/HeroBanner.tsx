import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Database, Globe, Download } from 'lucide-react';
import { SOCIAL_LINKS, CV_URL } from '../utils/constants';
import { FloatingIcon } from './ui/FloatingIcon';
import { SocialLink } from './ui/SocialLink';

export const HeroBanner = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-32 -left-32 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute w-[500px] h-[500px] -bottom-32 -right-32 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Icons */}
      <FloatingIcon icon={Code2} className="top-20 left-[15%]" />
      <FloatingIcon icon={Database} className="bottom-20 left-[20%]" />
      <FloatingIcon icon={Globe} className="top-32 right-[20%]" />
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6"
            >
              Available for new projects
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gray-900 dark:text-white">
                IDRISSA
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                WADE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Full-Stack Developer passionate about crafting scalable solutions and delivering exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 dark:shadow-blue-900/30 text-center"
              >
                View Projects
              </motion.a>
              <motion.a
                href={CV_URL}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow text-center flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                <span>Download CV</span>
              </motion.a>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <SocialLink href={SOCIAL_LINKS.GITHUB} icon={<Github />} label="GitHub" />
              <SocialLink href={SOCIAL_LINKS.LINKEDIN} icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href={SOCIAL_LINKS.EMAIL} icon={<Mail />} label="Email" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full animate-spin-slow">
                <div className="h-full w-full rounded-full border-2 border-dashed border-blue-500/20 dark:border-blue-400/20" />
              </div>
              <div className="absolute inset-4 rounded-full animate-spin-slow-reverse">
                <div className="h-full w-full rounded-full border-2 border-dashed border-indigo-500/20 dark:border-indigo-400/20" />
              </div>
              
              {/* Profile image container */}
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
        </div>
      </div>
    </section>
  );
};