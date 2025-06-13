import 'app/globals.css'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Calendar, Clock, Info, Loader2 } from 'lucide-react'

export const ElectionCard = ({ election, scale = 1 }) => {
  const router = useRouter()
  const startTimestamp = Number(election.startDate)
  const endTimestamp = Number(election.endDate)

  const now = Date.now()
  const rawProgress = (now - startTimestamp) / (endTimestamp - startTimestamp)
  const progress = Math.max(0, Math.min(1, rawProgress))
  const [pct, setPct] = useState(Math.round(progress * 100))

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      const raw = (now - startTimestamp) / (endTimestamp - startTimestamp)
      const clamped = Math.max(0, Math.min(1, raw))
      setPct(Math.round(clamped * 100))
    }, 60000)

    return () => clearInterval(interval)
  }, [startTimestamp, endTimestamp])

  const formattedStart = moment(startTimestamp).format('dddd, MMM D YYYY [at] h:mm A')
  const formattedEnd = moment(endTimestamp).format('dddd, MMM D YYYY [at] h:mm A')

  return (
    <motion.div
      className={'m-5 rounded-3xl bg-transparent border-6 border-blackish-blue/20'}
      initial={{ scale }}
      animate={{ scale }}
      whileHover={{ scale: scale * 1.05 }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}>
      <motion.div
        className={'w-96 h-96 bg-blackish-blue/20 rounded-2xl shadow-2xl p-6 cursor-pointer flex flex-col'}
        onClick={() => router.push(`elections/${election.id}`)}>
        <div className={'flex items-center mb-4'}>
          <Info className={'w-6 h-6 text-accent-light/90 mr-2'} />
          <h3 className={'text-2xl font-bold text-accent-light/90 truncate'}>{election.name}</h3>
        </div>

        <p className={'text-md text-accent-coral/70 line-clamp-3 flex-grow mb-4'}>{election.description}</p>

        <div className={'space-y-2 mb-4'}>
          <div className={'flex items-center text-sm text-gray-400'}>
            <Calendar className={'w-4 h-4 mr-2'} />
            <span>{formattedStart}</span>
          </div>
          <div className={'flex items-center text-sm text-gray-400'}>
            <Clock className={'w-4 h-4 mr-2'} />
            <span>{formattedEnd}</span>
          </div>
        </div>

        <div className={'relative mt-auto'}>
          <div className={'w-full h-3 bg-gray-600 rounded-full overflow-hidden mb-2'}>
            <motion.div
              className={'h-full bg-accent-dark/70'}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className={'flex justify-between items-center text-xs text-gray-300'}>
            <span>{election.status}</span>
            <div className={'flex items-center'}>
              {pct < 100 ? (
                <Loader2 className={'w-4 h-4 animate-spin mr-1'} />
              ) : (
                <Info className={'w-4 h-4 mr-1 text-accent-light/90 '} />
              )}
              <span>{pct}%</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
