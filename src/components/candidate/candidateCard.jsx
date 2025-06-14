import { motion } from 'framer-motion'
import moment from 'moment/moment'
import React from 'react'
import { GradientButton } from 'components/home/gradientButton'

export const CandidateCard = ({ candidate, index, castVote }) => (
  <motion.div
    key={candidate.id}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className={`
              group bg-gradient-to-tl from-secondary-light/10 to-midnight-blue/10 
              backdrop-blur-lg border border-yellow/20 rounded-2xl 
              p-6 h-full flex flex-col
              hover:border-secondary-very-light/30 
              transition-all duration-100 
              hover:shadow-lg hover:shadow-secondary-light/15
            `}>
    <div className={'flex justify-center mb-6'}>
      <div
        className={`
                w-24 h-24 rounded-full bg-gradient-to-tl to-secondary-tale from-secondary-dark/80 
                flex items-center justify-center text-secondary-very-light/90 text-2xl font-bold
                shadow-lg
              `}>
        {candidate.firstName?.[0]}
        {candidate.lastName?.[0]}
      </div>
    </div>

    <div className={'flex-1 text-center mb-6'}>
      <h3 className={'text-2xl font-bold text-white mb-4'}>
        {candidate.firstName} {candidate.lastName}
      </h3>

      <div className={'space-y-3'}>
        <div className={'bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10'}>
          <span className={'text-blue-100/70 text-sm block mb-1'}>Education</span>
          <p className={'text-white text-sm font-medium'}>{candidate.education}</p>
        </div>

        <div className={'bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10'}>
          <span className={'text-blue-100/70 text-sm block mb-1'}>Marital Status</span>
          <p className={'text-white text-sm font-medium'}>{candidate.civilStatus}</p>
        </div>

        <div className={'bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10'}>
          <span className={'text-blue-100/70 text-sm block mb-1'}>Date of Birth</span>
          <p className={'text-white text-sm font-medium'}>
            {moment(Number(candidate.dateOfBirth)).format('MMMM D, YYYY')}
          </p>
        </div>
      </div>
    </div>

    <GradientButton
      title={'Cast Vote'}
      innerCss={
        'bg-gradient-to-r  from-secondary-very-light/15 to-secondary-very-light/20 w-full rounded-xl  text-deep-ocean/20 hover:text-white/90 '
      }
      outerCss={'w-full bg-gradient-to-r from-white/10 to-white/15 rounded-xl'}
      handleOnClick={() => castVote(index)}
    />
  </motion.div>
)
