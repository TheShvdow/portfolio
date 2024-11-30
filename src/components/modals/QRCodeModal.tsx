import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { X } from 'lucide-react';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvUrl: string;
}

export const QRCodeModal = ({ isOpen, onClose, cvUrl }: QRCodeModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl max-w-sm w-full relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Scanner pour télécharger le CV
              </h3>
              <div className="bg-white p-4 rounded-xl inline-block mb-4">
                <QRCodeSVG
                  value={cvUrl}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Scannez ce QR code avec votre téléphone pour télécharger le CV
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};