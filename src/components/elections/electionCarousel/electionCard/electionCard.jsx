import 'app/globals.css'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { ElectionCardHeader } from 'components/elections/electionCarousel/electionCard/electionCardHeader'
import { electionCardSettings } from 'components/elections/electionCarousel/utils/electionCardSettings'
import { ElectionCardFooter } from 'components/elections/electionCarousel/electionCard/electionCardFooter'
import { ElectionCardTimeDetails } from 'components/elections/electionCarousel/electionCard/electionCardTimeDetails'
import { ElectionCardMetaDetails } from 'components/elections/electionCarousel/electionCard/electionCardMetaDetails'
import { makeProgress } from 'components/elections/electionCarousel/utils/makeProgress'
import { MovingArrow } from 'components/elections/electionCarousel/electionCard/movingArrow'

export const ElectionCard = ({ election, scale = 1 }) => {
  const router = useRouter()
  const startTimestamp = Number(election.startDate)
  const endTimestamp = Number(election.endDate)
  const progress = makeProgress(startTimestamp, endTimestamp)
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

  const statusInfo = electionCardSettings(pct)
  const StatusIcon = statusInfo.icon

  return (
    <motion.div className={'group relative w-128 h-full'} whileHover={{ scale: scale * 1.02, y: -8 }}>
      <motion.div
        className={`relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border ${statusInfo.borderColor} rounded-3xl shadow-2xl cursor-pointer overflow-hidden hover:shadow-3xl transition-all duration-500`}
        onClick={() => router.push(`elections/${election.id}`)}
        whileTap={{ scale: 0.1 }}>
        <div
          className={`h-1 w-full bg-gradient-to-r ${pct === 100 ? 'from-green-400 to-emerald-500' : pct === 0 ? 'from-blue-400 to-green-500' : 'from-orange-400 to-red-500'}`}
        />

        <div className={'p-8 h-full flex flex-col'}>
          <ElectionCardHeader StatusIcon={StatusIcon} statusInfo={statusInfo} />
          <ElectionCardMetaDetails election={election} />
          <ElectionCardTimeDetails startTimestamp={startTimestamp} endTimestamp={endTimestamp} />
          <ElectionCardFooter StatusIcon={StatusIcon} statusInfo={statusInfo} pct={pct} />
        </div>
        <MovingArrow />
      </motion.div>
    </motion.div>
  )
}
