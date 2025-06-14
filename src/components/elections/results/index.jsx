'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useGetElections } from 'components/hooks/useGetElections'
import { useGetCandidates } from 'components/hooks/useGetCandidates'
import { ResultsList } from 'components/elections/results/resultsList'
import { ResultsBarChart } from 'components/elections/results/barChart'
import { ResultsPieChart } from 'components/elections/results/pieChart'
import { Container } from 'components/home/container'

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2
    }
  },
  exit: { opacity: 0, y: -20 }
}

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

export const Results = () => {
  const { electionId } = useParams()
  const {
    data: electionData,
    isFetching: isElectionsFetching,
    error: electionsError
  } = useGetElections({ electionsId: electionId })
  const {
    data: candidatesData,
    isFetching: isCandidatesFetching,
    error: candidatesError
  } = useGetCandidates({ electionId: Number(electionId) })

  if (isElectionsFetching || isCandidatesFetching) {
    return (
      <Container css={' bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900'}>
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
              className={'text-2xl font-light text-blue-100/90'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}>
              Loading results...
            </motion.div>
          </div>
        </motion.div>
      </Container>
    )
  }

  if (electionsError || candidatesError) {
    return (
      <Container css={'relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900'}>
        <motion.div
          className={'flex items-center justify-center min-h-screen'}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <motion.div
            className={'bg-red-500/10 backdrop-blur-lg border border-red-400/20 rounded-2xl p-8 text-center'}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}>
            <div className={'text-red-400 text-xl font-medium'}>
              Error: {electionsError?.message || candidatesError?.message}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    )
  }

  const results = electionData?.elections?.[0]?.results || []
  const candidates =
    candidatesData?.candidates.map(c => ({
      id: c.id,
      firstName: c?.candidateProfile?.firstName,
      lastName: c?.candidateProfile?.lastName
    })) || []

  const voteCountMap = results.reduce((acc, id) => {
    acc[id] = (acc[id] || 0) + 1

    return acc
  }, {})

  const candidateResults = candidates.map(candidate => ({
    ...candidate,
    votes: voteCountMap[candidate.id] || 0
  }))

  return (
    <Container
      css={'relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden'}>
      {/* Background effects */}
      <div className={'absolute inset-0 opacity-10'}>
        <motion.div
          className={'absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl'}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className={'absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl'}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
        />
        <motion.div
          className={
            'absolute bottom-20 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl'
          }
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
        />
      </div>

      <motion.div className={'relative z-10 p-10'} variants={pageVariants} initial={'initial'} animate={'animate'}>
        <ResultsList title={electionData?.elections?.[0]?.name} results={candidateResults} />
        <AnimatePresence>
          {results?.length > 0 && (
            <>
              <ResultsBarChart candidateResults={candidateResults} />
              <ResultsPieChart candidateResults={candidateResults} />
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </Container>
  )
}
