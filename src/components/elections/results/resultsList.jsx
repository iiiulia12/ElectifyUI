import { CandidateResultItem } from 'components/elections/results/candidateResultItem'
import { Container } from 'components/home/container'
import React from 'react'

export const ResultsList = ({ title, results }) => {
  const css = '!bg-cloudy/30'

  return (
    <Container css={css}>
      <div className={'p-3 font-bold text-xl mt-12 text-midnight-blue'}>Results for {title}</div>
      <div className={' text-dark-cloudy flex flex-col justify-center flex-1'}>
        {results?.length > 0 ? (
          results?.map(candidate => <CandidateResultItem key={candidate.id} candidate={candidate} />)
        ) : (
          <div className={' text-center text-gray-500 '}>No results found.</div>
        )}
      </div>
    </Container>
  )
}
