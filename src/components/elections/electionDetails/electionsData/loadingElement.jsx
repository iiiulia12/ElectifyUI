import React from 'react'
import { Container } from 'components/home/container'
import { motion } from 'framer-motion'

const loadingVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear'
    }
  }
}

export const LoadingElement = ({ title }) => (
  <motion.div
    className={'flex items-center justify-center min-h-screen'}
    variants={loadingVariants}
    initial={'initial'}
    animate={'animate'}>
    <div className={'text-center'}>
      <motion.div
        className={'w-16 h-16 border-4 border-blue-400/30 border-t-blue-400 rounded-full mx-auto mb-4'}
        variants={spinnerVariants}
        animate={'animate'}
      />
      <motion.div
        className={'text-2xl font-light text-white/90'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}>
        {title}
      </motion.div>
    </div>
  </motion.div>
)
