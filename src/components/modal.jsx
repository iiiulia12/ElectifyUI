import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

export const Modal = ({ text, closeModal }) => (
  <AnimatePresence>
    <motion.div 
      className={'fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50 z-50'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => closeModal(false)}
    >
      <motion.div 
        className={'bg-white rounded-2xl shadow-2xl w-[90%] max-w-md mx-4 overflow-hidden'}
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="text-lg font-semibold">Attention Required</h3>
            </div>
            <motion.button
              className={'p-1 hover:bg-white/20 rounded-lg transition-colors'}
              onClick={() => closeModal(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faXmark} className={'h-5 w-5'} />
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className={'text-slate-700 leading-relaxed text-center'}>
            {text}
          </p>
          
          <div className="mt-6 flex justify-center">
            <motion.button
              className="btn-primary"
              onClick={() => closeModal(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Got it
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
)