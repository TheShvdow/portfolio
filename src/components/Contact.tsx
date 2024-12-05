import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { SocialLink } from './ui/SocialLink';

export const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold mb-8"
          >
            Contactez-moi
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-300 mb-12"
          >
            Je suis toujours intéressé par de nouveaux projets et opportunités.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <SocialLink 
              href="mailto:derisswvde@gmail.com" 
              Icon={Mail} 
              label="Email" 
            />
            <SocialLink 
              href="https://github.com/TheShvdow" 
              Icon={Github} 
              label="GitHub" 
            />
            <SocialLink 
              href="https://www.linkedin.com/in/idrissa-wade/" 
              Icon={Linkedin} 
              label="LinkedIn" 
            />
            <SocialLink 
              href="tel:+221778014941" 
              Icon={Phone} 
              label="Téléphone" 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};  