import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, QrCode } from 'lucide-react';
import { SOCIAL_LINKS } from '../../../utils/constants';
import { SocialLink } from '../../ui/SocialLink';

interface HeroContentProps {
  onOpenQRModal: () => void;
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.1,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const phrases = [
  "Architecte de l'Excellence Numérique",
  "De la Vision à la Réalité",
  "Maîtrise Full-Stack en Action",
  "Innover avec Purpose"
];

const descriptions = [
  "Transformer des Défis Complexes en",
  "Solutions Élégantes avec",
  "Technologies Modernes"
];

export const HeroContent = ({ onOpenQRModal }: HeroContentProps) => {
  const [currentPhrase, setCurrentPhrase] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
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
        Disponible pour de nouveaux projets
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
      
      <div className="relative h-24 mb-8">
        <motion.div
          key={currentPhrase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {phrases[currentPhrase]}
          </p>
        </motion.div>
      </div>

      <div className="mb-8">
        {descriptions.map((text, index) => (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 inline-block"
          >
            {text}{' '}
          </motion.span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 dark:shadow-blue-900/30 text-center"
        >
          Voir les Projets
        </motion.a>
        <motion.button
          onClick={onOpenQRModal}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow text-center flex items-center justify-center gap-2"
        >
          <QrCode className="w-5 h-5" />
          <span>CV QR Code</span>
        </motion.button>
      </div>

      <div className="flex gap-6 justify-center lg:justify-start">
        <SocialLink href={SOCIAL_LINKS.GITHUB} icon={<Github />} label="GitHub" />
        <SocialLink href={SOCIAL_LINKS.LINKEDIN} icon={<Linkedin />} label="LinkedIn" />
        <SocialLink href={SOCIAL_LINKS.EMAIL} icon={<Mail />} label="Email" />
      </div>
    </motion.div>
  );
};