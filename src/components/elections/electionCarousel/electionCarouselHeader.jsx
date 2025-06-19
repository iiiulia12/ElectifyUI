import { Vote } from 'lucide-react'
import { Stats } from 'components/elections/electionCarousel/stats'
import React from 'react'

export const ElectionCarouselHeader = ({ elections }) => (
  <div className={'text-center mb-16 px-10'}>
    <div className={'inline-flex items-center space-x-3 mb-6'}>
      <div className={'p-3  rounded-full backdrop-blur-sm border border-white/10'}>
        <Vote className={'w-8 h-8 text-secondary-very-light'} />
      </div>
      <h2
        className={
          'text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-light-sky-blue to-secondary-very-light bg-clip-text text-transparent'
        }>
        Elections
      </h2>
    </div>

    <p className={'text-xl text-blue-100/80 font-light mb-8 max-w-3xl mx-auto'}>
      Participate in secure, transparent democratic processes powered by blockchain technology
    </p>

    <Stats elections={elections} />
  </div>
)
