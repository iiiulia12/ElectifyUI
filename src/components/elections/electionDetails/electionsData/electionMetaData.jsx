import { GradientElement } from 'components/home/gradientElement'
import React from 'react'
import { ElectionStatus } from 'components/elections/electionDetails/electionsData/electionStatus'
import { ElectionPeriod } from 'components/elections/electionDetails/electionsData/electionPeriod'
import { BlockchainDetails } from 'components/elections/electionDetails/electionsData/blockchainDetails'

export const ElectionMetaData = ({ election }) => (
  <>
    <div className={'text-center mb-8'}>
      <h1 className={'text-4xl md:text-5xl font-bold text-white mb-4'}>{election.name}</h1>
      <GradientElement />
      <p className={'text-xl text-blue-100/90 max-w-2xl mx-auto leading-relaxed'}>{election.description}</p>
    </div>
    <ElectionStatus election={election} />
    <ElectionPeriod election={election} />
    <BlockchainDetails election={election} />
  </>
)
