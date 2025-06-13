import React, { useMemo } from 'react'
import { useGetElections } from 'components/hooks/useGetElections'
import { ElectionCard } from 'components/elections/electionCarousel/electionCard'
import { Container } from 'components/home/container'
import { motion } from 'framer-motion'
import { Vote, Loader2 } from 'lucide-react'

export const ElectionCarousel = () => {
  const { data, isFetching } = useGetElections()
  const elections = useMemo(() => data?.elections || [], [data])
  const looped = useMemo(() => [...elections, ...elections], [elections])

  if (isFetching) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center h-full">
          <Loader2 className="w-12 h-12 animate-spin text-blue-500 mb-4" />
          <p className="text-slate-400 text-lg">Loading elections...</p>
        </div>
      </Container>
    )
  }

  if (elections.length === 0) {
    return (
      <Container>
        <div className="flex flex-col items-center justify-center h-full text-center">
          <Vote className="w-16 h-16 text-slate-400 mb-4" />
          <h2 className="text-2xl font-bold text-slate-300 mb-2">No Elections Available</h2>
          <p className="text-slate-400">Check back later for upcoming elections.</p>
        </div>
      </Container>
    )
  }

  return (
    <Container>
      <div className="relative flex h-full overflow-hidden">
        {/* Header */}
        <motion.div 
          className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
            <Vote className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Active Elections</h2>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className={'relative flex items-center justify-center overflow-hidden px-[10%] pt-20'}>
          <motion.div
            className={'flex space-x-8'}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ 
              x: { 
                repeat: Infinity, 
                repeatType: 'loop', 
                duration: elections.length * 8, 
                ease: 'linear' 
              } 
            }}
          >
            {looped.map((election, idx) => (
              <motion.div 
                key={`${election.id}-${idx}`} 
                className={'flex-shrink-0'}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: idx * 0.1,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <ElectionCard election={election} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900/90 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900/90 to-transparent pointer-events-none z-10" />
      </div>
    </Container>
  )
}