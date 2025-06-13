import 'app/globals.css'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Calendar, Clock, Info, Loader2, Users, CheckCircle, Play } from 'lucide-react'

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

  const formattedStart = moment(startTimestamp).format('MMM D, YYYY [at] h:mm A')
  const formattedEnd = moment(endTimestamp).format('MMM D, YYYY [at] h:mm A')

  const getStatusIcon = () => {
    if (pct >= 100) return <CheckCircle className="w-5 h-5 text-green-400" />
    if (pct > 0) return <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
    return <Play className="w-5 h-5 text-amber-400" />
  }

  const getStatusColor = () => {
    if (pct >= 100) return 'from-green-500 to-emerald-500'
    if (pct > 0) return 'from-blue-500 to-indigo-500'
    return 'from-amber-500 to-orange-500'
  }

  return (
    <motion.div
      className={'m-5'}
      initial={{ scale, opacity: 0, y: 50 }}
      animate={{ scale, opacity: 1, y: 0 }}
      whileHover={{ 
        scale: scale * 1.05,
        rotateY: 5,
        rotateX: 2
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 250, 
        damping: 20,
        opacity: { duration: 0.6 },
        y: { duration: 0.6 }
      }}
    >
      <motion.div
        className={'w-96 h-96 card-enhanced cursor-pointer flex flex-col relative overflow-hidden group'}
        onClick={() => router.push(`elections/${election.id}`)}
      >
        {/* Gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${getStatusColor()} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
        
        {/* Content */}
        <div className={'p-6 flex-1 relative z-10'}>
          {/* Header */}
          <div className={'flex items-start justify-between mb-4'}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl bg-gradient-to-br ${getStatusColor()} shadow-lg`}>
                <Info className={'w-5 h-5 text-white'} />
              </div>
              <div>
                <h3 className={'text-xl font-bold text-slate-800 line-clamp-2 leading-tight'}>
                  {election.name}
                </h3>
                <div className="flex items-center gap-1 mt-1">
                  {getStatusIcon()}
                  <span className={`text-sm font-medium ${
                    pct >= 100 ? 'text-green-600' : 
                    pct > 0 ? 'text-blue-600' : 'text-amber-600'
                  }`}>
                    {election.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className={'text-slate-600 line-clamp-3 mb-6 leading-relaxed'}>
            {election.description}
          </p>

          {/* Date info */}
          <div className={'space-y-3 mb-6'}>
            <div className={'flex items-center text-sm text-slate-500 bg-slate-50 rounded-lg p-3'}>
              <Calendar className={'w-4 h-4 mr-3 text-blue-500'} />
              <div>
                <div className="font-medium text-slate-700">Starts</div>
                <div>{formattedStart}</div>
              </div>
            </div>
            <div className={'flex items-center text-sm text-slate-500 bg-slate-50 rounded-lg p-3'}>
              <Clock className={'w-4 h-4 mr-3 text-purple-500'} />
              <div>
                <div className="font-medium text-slate-700">Ends</div>
                <div>{formattedEnd}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress section */}
        <div className={'p-6 pt-0 relative z-10'}>
          <div className={'relative'}>
            {/* Progress bar */}
            <div className={'w-full h-3 bg-slate-200 rounded-full overflow-hidden mb-3'}>
              <motion.div
                className={`h-full bg-gradient-to-r ${getStatusColor()} shadow-sm`}
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>
            
            {/* Progress info */}
            <div className={'flex justify-between items-center text-sm'}>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-slate-400" />
                <span className="text-slate-600 font-medium">Progress</span>
              </div>
              <div className={'flex items-center gap-2'}>
                {getStatusIcon()}
                <span className="font-bold text-slate-700">{pct}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Bottom accent */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${getStatusColor()} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
      </motion.div>
    </motion.div>
  )
}