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
import { LoadingElement } from 'components/elections/electionDetails/electionsData/loadingElement'
import { BackgroundCirclesEffect } from '@/components/home/backgroundCirclesEffect'

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
  const containerCss = 'bg-gradient-to-br from-blackish-blue via-navy-blue to-secondary-dark'

  if (isElectionsFetching || isCandidatesFetching) {
    return <LoadingElement title={'Loading Results'} />
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
    <Container css={containerCss}>
      <BackgroundCirclesEffect />
      <motion.div className={'relative z-10 p-10'} variants={pageVariants} initial={'initial'} animate={'animate'}>
        <ResultsList title={electionData?.elections?.[0]?.name} results={candidateResults} />
        <AnimatePresence mode={'wait'}>
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
