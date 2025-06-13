import { motion } from 'framer-motion'

export const Container = ({ children, css = '' }) => (
  <motion.div 
    className={'flex flex-col justify-center items-center mx-4 mt-[12vh] relative'}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className={`glass-dark rounded-3xl shadow-2xl w-full min-h-[80vh] flex flex-col relative ${css}`}>
      {/* Decorative gradient border */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 p-[1px]">
        <div className="w-full h-full rounded-3xl bg-slate-900/90 backdrop-blur-xl" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl opacity-50" />
    </div>
  </motion.div>
)