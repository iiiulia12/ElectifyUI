'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { useGetElections } from 'components/hooks/useGetElections'
import { useGetCandidates } from 'components/hooks/useGetCandidates'
import { ResultsList } from 'components/elections/results/resultsList'
import { ResultsBarChart } from 'components/elections/results/barChart'
import { ResultsPieChart } from 'components/elections/results/pieChart'

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
    return <div className={'text-center text-gray-500'}>Loading results...</div>
  }

  if (electionsError) {
    return <div className={'text-center text-red-500'}>Error: {electionsError.message}</div>
  }

  if (candidatesError) {
    return <div className={'text-center text-red-500'}>Error: {candidatesError.message}</div>
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

  console.log(candidateResults)

  return (
    <>
      <ResultsList title={electionData?.elections?.[0]?.name} results={candidateResults} />
      <ResultsBarChart candidateResults={candidateResults} />
      <ResultsPieChart candidateResults={candidateResults} />
    </>
  )
}
