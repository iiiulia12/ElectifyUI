import { motion } from 'framer-motion'
import React from 'react'

export const MovingArrow = () => (
  <div className={'absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'}>
    <div className={'flex items-center space-x-1 text-xs text-white/60'}>
      <span>Click to view</span>
      <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
        →
      </motion.div>
    </div>
  </div>
)
