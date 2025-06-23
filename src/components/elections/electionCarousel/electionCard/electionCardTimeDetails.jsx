import { Calendar, Clock } from 'lucide-react'
import React from 'react'
import moment from 'moment/moment'

export const ElectionCardTimeDetails = ({ startTimestamp, endTimestamp }) => {
  const formattedStart = moment(startTimestamp).format('MMM D, YYYY')
  const formattedStartTime = moment(startTimestamp).format('h:mm A')
  const formattedEnd = moment(endTimestamp).format('MMM D, YYYY')
  const formattedEndTime = moment(endTimestamp).format('h:mm A')

  return (
    <div className={'space-y-3 mb-6'}>
      <div className={'flex items-center text-sm text-white/60 group-hover:text-white/70 '}>
        <div className={'p-1.5 bg-white/10 rounded-lg mr-3'}>
          <Calendar className={'w-4 h-4'} />
        </div>
        <div>
          <div className={'font-medium'}>{formattedStart}</div>
          <div className={'text-xs opacity-75'}>{formattedStartTime}</div>
        </div>
      </div>

      <div className={'flex items-center text-sm text-white/60 group-hover:text-white/70'}>
        <div className={'p-1.5 bg-white/10 rounded-lg mr-3'}>
          <Clock className={'w-4 h-4'} />
        </div>
        <div>
          <div className={'font-medium'}>{formattedEnd}</div>
          <div className={'text-xs opacity-75'}>{formattedEndTime}</div>
        </div>
      </div>
    </div>
  )
}
