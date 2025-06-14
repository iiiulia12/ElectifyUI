import React from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export const ElectionCardFooter = ({ pct, statusInfo, StatusIcon }) => (
  <div className={'mt-auto'}>
    <div className={'flex justify-between items-center mb-3'}>
      <span className={'text-xs font-medium text-white/60'}>Progress</span>
      <div className={'flex items-center space-x-2'}>
        {pct < 100 && pct > 0 ? (
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}>
            <Loader2 className={'w-4 h-4 text-orange-400'} />
          </motion.div>
        ) : (
          <StatusIcon className={`w-4 h-4 ${statusInfo.color}`} />
        )}
        <span className={`text-sm font-bold ${statusInfo.color}`}>{pct}%</span>
      </div>
    </div>

    <div className={'relative'}>
      <div className={'w-full h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm'}>
        <motion.div
          className={`h-full rounded-full ${
            pct === 100
              ? 'bg-gradient-to-r from-green-400 to-emerald-500'
              : pct === 0
                ? 'bg-gradient-to-r from-blue-400 to-indigo-500'
                : 'bg-gradient-to-r from-orange-400 to-red-500'
          } relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 1.5, ease: 'easeOut' }}>
          {pct > 0 && pct < 100 && (
            <motion.div
              className={'absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent'}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          )}
        </motion.div>
      </div>

      {/* Progress indicators */}
      <div className={'flex justify-between mt-2 text-xs text-white/40'}>
        <span>Start</span>
        <span>End</span>
      </div>
    </div>
  </div>
)
