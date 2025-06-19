import { motion } from 'framer-motion'
import React from 'react'

export const GradientElement = ({}) => (
  <motion.div
    className={'w-24 h-1  bg-gradient-to-r from-secondary-teal via-secondary-light to-deep-ocean mx-auto rounded-full'}
    initial={{ width: 0 }}
    animate={{ width: 96 }}
    transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
  />
)
