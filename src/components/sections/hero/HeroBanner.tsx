import React, { useState } from 'react';
import { Code2, Database, Globe } from 'lucide-react';
import { QRCodeModal } from '../../modals/QRCodeModal';
import { CV_URL } from '../../../utils/constants';
import { FloatingIcon } from '../../ui/FloatingIcon';
import { HeroContent } from './HeroContent';
import { ProfileImage } from './ProfileImage';

export const HeroBanner = () => {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-300">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-32 -left-32 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute w-[500px] h-[500px] -bottom-32 -right-32 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        <FloatingIcon icon={Code2} className="top-20 left-[15%]" />
        <FloatingIcon icon={Database} className="bottom-20 left-[20%]" />
        <FloatingIcon icon={Globe} className="top-32 right-[20%]" />
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            <HeroContent onOpenQRModal={() => setIsQRModalOpen(true)} />
            <ProfileImage />
          </div>
        </div>
      </section>
      
      <QRCodeModal
        isOpen={isQRModalOpen}
        onClose={() => setIsQRModalOpen(false)}
        cvUrl={CV_URL}
      />
    </>
  );
};