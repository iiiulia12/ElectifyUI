'use client'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

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

  const formattedStart = moment(startTimestamp).format('dddd, MMMM D, YYYY [at] h:mm A')
  const formattedEnd = moment(endTimestamp).format('dddd, MMMM D, YYYY [at] h:mm A')

  return (
    <motion.div
      className={
        'w-96 h-96 bg-blackish-blue/20 rounded-2xl shadow-lg p-6 m-5 relative cursor-pointer flex flex-col gap-4'
      }
      onClick={() => router.push(`elections/${election.id}`)}
      initial={{ scale }}
      animate={{ scale }}
      whileHover={{ scale: scale * 1.1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}>
      <div className={'text-3xl font-semibold text-accent-light/90 h-[30%]'}>{election.name}</div>
      <div className={'text-xl text-accent-coral/70 line-clamp-3 h-[25%]'}>{election.description}</div>

      <div className={'h-[25%] text-md text-white/60'}>
        <p>{formattedStart}</p>
        <p>{formattedEnd}</p>
      </div>

      <div className={'absolute bottom-0 w-full left-0 px-6 mb-12'}>
        <div className={'w-full h-4 bg-cloudy rounded-full overflow-hidden'}>
          <div className={'h-full bg-accent-coral/70'} style={{ width: `${pct}%` }} />
        </div>
        <p className={'text-xs text-right mt-1 text-accent-coral/70'}>{pct}%</p>
      </div>
    </motion.div>
  )
}
