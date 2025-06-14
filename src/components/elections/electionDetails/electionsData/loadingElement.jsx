import React from 'react'

export const LoadingElement = () => (
  <div className={'flex justify-center items-center py-20'}>
    <div
      className={'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8'}>
      <div className={'flex items-center space-x-3'}>
        <div className={'w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin'} />
        <span className={'text-white/80 text-lg'}>Loading election data...</span>
      </div>
    </div>
  </div>
)
