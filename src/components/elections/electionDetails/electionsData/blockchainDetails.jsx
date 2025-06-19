import React from 'react'

export const BlockchainDetails = ({ election }) => {
  if (!election.contractAddress) return null

  return (
    <div
      className={
        'bg-gradient-to-r from-secondary-light/10 to-midnight-blue/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8'
      }>
      <h3 className={'text-lg font-semibold text-blue-100 mb-4 flex items-center'}>
        <div className={'w-2 h-2 bg-blue-400 rounded-full mr-3'} />
        Blockchain Information
      </h3>
      <div className={'space-y-3'}>
        <div>
          <span className={'text-blue-100/70 text-sm'}>Merkle Root:</span>
          <p className={'text-white font-mono text-sm break-all bg-white/5 p-2 rounded mt-1'}>{election.merkleRoot}</p>
        </div>
        <div>
          <span className={'text-blue-100/70 text-sm'}>Contract Address:</span>
          <p className={'text-white font-mono text-sm break-all bg-white/5 p-2 rounded mt-1'}>
            {election.contractAddress}
          </p>
        </div>
      </div>
    </div>
  )
}
