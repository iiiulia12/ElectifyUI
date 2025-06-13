import React from 'react'
import { motion } from 'framer-motion'

export const Card = ({ title, description, icon, gradient = "from-blue-500 to-purple-500" }) => (
  <motion.div
    className={'card-enhanced p-8 h-full flex flex-col relative overflow-hidden group'}
    whileHover={{ 
      scale: 1.02,
      rotateY: 5,
      rotateX: 5
    }}
    transition={{ 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    }}
  >
    {/* Gradient overlay on hover */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
    
    {/* Icon with gradient background */}
    <motion.div 
      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} p-3 mb-6 shadow-lg`}
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full h-full flex items-center justify-center text-white">
        {icon}
      </div>
    </motion.div>

    <h3 className={'text-2xl font-bold text-slate-800 mb-4 group-hover:text-gradient transition-all duration-300'}>
      {title}
    </h3>

    <p className={'text-slate-600 leading-relaxed flex-grow text-lg'}>
      {description}
    </p>

    {/* Subtle shimmer effect */}
    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Bottom accent line */}
    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
  </motion.div>
)