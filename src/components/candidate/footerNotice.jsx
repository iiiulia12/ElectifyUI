import React from 'react'

export const FooterNotice = () => (
  <div className={'mt-12 max-w-4xl mx-auto'}>
    <div
      className={
        'bg-gradient-to-r  from-yellow/10 to-secondary-light/5 backdrop-blur-sm rounded-xl p-6 border border-white/10'
      }>
      <div className={'flex items-center justify-center space-x-3 mb-4'}>
        <div className={'w-3 h-3 bg-green-400 rounded-full animate-pulse'} />
        <h3 className={'text-lg font-semibold text-green-100'}>Secure Voting Process</h3>
      </div>
      <p className={'text-center text-green-100/80 text-sm leading-relaxed'}>
        Your vote is protected by advanced cryptographic protocols. Each vote is anonymous, tamper-proof, and
        permanently recorded on the blockchain for complete transparency.
      </p>
    </div>
  </div>
)
