'use client'
import React from 'react'
import { Github, Linkedin, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export const Footer = () => (
  <motion.footer
    className={'glass-dark text-slate-300 flex flex-col md:flex-row items-center justify-between w-full px-6 py-4 border-t border-white/10'}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
  >
    <div className={'flex items-center gap-2 text-sm'}>
      <span>© {new Date().getFullYear()} Electify. Made with</span>
      <Heart className="w-4 h-4 text-red-400 fill-current" />
      <span>for democracy.</span>
    </div>

    <div className={'flex items-center space-x-4'}>
      <motion.a 
        href={'https://github.com/iiiulia12'} 
        className={'p-2 rounded-lg hover:bg-white/10 transition-colors'} 
        aria-label={'GitHub'}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Github size={20} />
      </motion.a>
      <motion.a
        href={'https://www.linkedin.com/in/iulia-ratiu-ba712a268/'}
        className={'p-2 rounded-lg hover:bg-white/10 transition-colors'}
        aria-label={'LinkedIn'}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <Linkedin size={20} />
      </motion.a>
    </div>
  </motion.footer>
)