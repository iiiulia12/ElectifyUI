import React from 'react'

export const ElectionCardMetaDetails = ({ election }) => (
  <>
    <div className={'flex items-start justify-between mb-6'}>
      <div className={'flex-1'}>
        <h3 className={'text-2xl font-bold text-white/90 leading-tight mb-2 group-hover:text-white transition-colors'}>
          {election.name}
        </h3>
      </div>
    </div>

    <p className={'text-white/70 text-sm leading-relaxed line-clamp-3 flex-grow mb-6 group-hover:text-white/80 '}>
      {election.description}
    </p>
  </>
)
