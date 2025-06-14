import React from 'react'
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: index => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: 'easeOut'
    }
  })
}

const progressBarVariants = {
  hidden: { width: 0 },
  visible: percentage => ({
    width: `${percentage}%`,
    transition: {
      delay: 0.8,
      duration: 1.2,
      ease: 'easeOut'
    }
  })
}

const hoverVariants = {
  hover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  }
}

export const CandidateResultItem = ({ candidate, index, totalVotes }) => {
  const { id, firstName, lastName, votes } = candidate
  const percentage = totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : 0

  return (
    <motion.div
      className={
        'group bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-xl p-6 mb-4 hover:bg-white/15 hover:border-blue-400/40 transition-colors duration-500 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer'
      }
      variants={cardVariants}
      custom={index}
      initial={'hidden'}
      animate={'visible'}
      whileHover={'hover'}
      {...hoverVariants}>
      <div className={'flex justify-between items-center'}>
        <div className={'flex items-center space-x-4'}>
          <motion.div
            className={
              'w-12 h-12 bg-gradient-to-tl from-white/50 to-secondary-light/50 rounded-full flex items-center justify-center text-white font-bold text-lg'
            }
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: index * 0.1 + 0.3,
              duration: 0.6,
              ease: 'easeOut'
            }}>
            {index + 1}
          </motion.div>
          <div>
            <motion.p
              className={'text-white font-semibold text-lg'}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}>
              {firstName} {lastName}
            </motion.p>
            <motion.p
              className={'text-blue-100/70 text-sm'}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}>
              Candidate {id}
            </motion.p>
          </div>
        </div>
        <div className={'text-right'}>
          <motion.div
            className={'text-2xl font-bold text-white mb-1'}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.1 + 0.6,
              duration: 0.4,
              ease: 'easeOut'
            }}>
            {votes} vote{votes !== 1 ? 's' : ''}
          </motion.div>
          <motion.div
            className={'text-blue-100/80 text-sm'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.7 }}>
            {percentage}% of total
          </motion.div>
        </div>
      </div>

      <div className={'mt-4 w-full bg-white/10 rounded-full h-2 overflow-hidden'}>
        <motion.div
          className={'h-full bg-gradient-to-r from-secondary-teal to-secondary-light  rounded-full'}
          variants={progressBarVariants}
          custom={percentage}
          initial={'hidden'}
          animate={'visible'}
        />
      </div>
    </motion.div>
  )
}
