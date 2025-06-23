import { motion } from 'framer-motion'
import React from 'react'

export const GradientButton = ({ title, handleOnClick = null, type = 'button', innerCss = '', outerCss = '' }) => (
  <div className={'flex justify-center'}>
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className={`p-[2px] rounded-3xl bg-gradient-to-r from-secondary-light/10 to-deep-ocean/10 hover:cursor-pointer ${outerCss}`}>
      <div
        onClick={handleOnClick}
        className={`w-full px-8 py-4 rounded-3xl font-semibold text-lg text-white/80 bg-gradient-to-r from-secondary-dark/50 to-navy-blue  ${innerCss}`}>
        {title}
      </div>
    </motion.button>
  </div>
)
