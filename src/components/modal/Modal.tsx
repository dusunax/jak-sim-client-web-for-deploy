'use client';

import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ModalProps } from '@/hooks/useModal';
import { cn } from '@/lib/shadcn/utils';


const Modal = ({
  modalProps,
  hasBackDrop = true,
  children,
  hasBackDropBlur = true,
}: {
  modalProps: ModalProps;
  hasBackDrop?: boolean;
  hasBackDropBlur?: boolean;
  children: ReactNode;
}) => {
  return (
    <AnimatePresence>
      {modalProps.isOpen && (
        <motion.div
          className={cn(
            'fixed inset-0 m-auto h-screen max-w-[400px]',
            hasBackDrop && 'bg-black bg-opacity-20',
            hasBackDropBlur && 'backdrop-blur-sm',
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;