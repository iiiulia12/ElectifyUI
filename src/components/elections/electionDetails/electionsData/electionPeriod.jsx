import moment from 'moment/moment'
import React from 'react'

export const ElectionPeriod = ({ election }) => (
  <div className={'grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'}>
    <div
      className={
        'bg-gradient-to-r from-secondary-light/10 to-midnight-blue/50 backdrop-blur-sm rounded-xl p-6 border border-white/10'
      }>
      <h3 className={'text-lg font-semibold text-blue-100 mb-2 flex items-center'}>
        <div className={'w-2 h-2 bg-green-400 rounded-full mr-3'} />
        Start Date
      </h3>
      <p className={'text-white text-xl'}>{moment(Number(election.startDate)).format('MMMM D, YYYY [at] h:mm A')}</p>
    </div>

    <div
      className={
        'bg-gradient-to-r from-secondary-light/10 to-midnight-blue/50 backdrop-blur-sm rounded-xl p-6 border border-white/10'
      }>
      <h3 className={'text-lg font-semibold text-blue-100 mb-2 flex items-center'}>
        <div className={'w-2 h-2 bg-red-400 rounded-full mr-3'} />
        End Date
      </h3>
      <p className={'text-white text-xl'}>{moment(Number(election.endDate)).format('MMMM D, YYYY [at] h:mm A')}</p>
    </div>
  </div>
)
