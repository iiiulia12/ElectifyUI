import React from 'react'
import { motion } from 'framer-motion'
import { CandidateResultItem } from 'components/elections/results/candidateResultItem'
import { GradientElement } from 'components/home/gradientElement'

const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const titleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: 'easeOut'
    }
  }
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.6,
      duration: 0.4,
      ease: 'easeOut'
    }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      staggerChildren: 0.1
    }
  }
}

export const ResultsList = ({ title, results }) => {
  const totalVotes = results?.reduce((sum, candidate) => sum + candidate.votes, 0) || 0
  const sortedResults = results?.sort((a, b) => b.votes - a.votes) || []

  return (
    <div className={'mb-16'}>
      <motion.div
        className={'text-center mb-12 pt-20'}
        variants={headerVariants}
        initial={'hidden'}
        animate={'visible'}>
        <motion.h1
          className={
            'text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-blue-100 to-green-200 bg-clip-text text-transparent mb-4 tracking-tight leading-tight'
          }
          variants={titleVariants}>
          Election Results
        </motion.h1>
        <motion.div className={'relative'} variants={subtitleVariants}>
          <p className={'text-2xl md:text-3xl text-blue-100/90 font-light mb-4'}>{title}</p>
          <GradientElement />
        </motion.div>

        <motion.div
          className={
            'inline-flex items-center space-x-2 mt-8 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 font-medium'
          }
          variants={badgeVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}>
          <motion.div
            className={'w-2 h-2 bg-green-400 rounded-full'}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <span>Total Votes: {totalVotes}</span>
        </motion.div>
      </motion.div>

      <motion.div className={'max-w-4xl mx-auto'} variants={containerVariants} initial={'hidden'} animate={'visible'}>
        {sortedResults?.length > 0 ? (
          sortedResults.map((candidate, index) => (
            <CandidateResultItem key={candidate.id} candidate={candidate} index={index} totalVotes={totalVotes} />
          ))
        ) : (
          <motion.div
            className={'text-center py-16'}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <motion.div
              className={
                'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-12'
              }
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}>
              <div className={'text-blue-100/70 text-xl'}>No results found.</div>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
