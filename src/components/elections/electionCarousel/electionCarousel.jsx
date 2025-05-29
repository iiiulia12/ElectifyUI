import React, { useMemo } from 'react'
import { useGetElections } from 'components/hooks/useGetElections'
import { ElectionCard } from 'components/elections/electionCarousel/electionCard'
import { Container } from 'components/home/container'
import { motion } from 'framer-motion'

export const ElectionCarousel = () => {
  const { data } = useGetElections()
  const elections = useMemo(() => data?.elections || [], [data])
  const looped = useMemo(() => [...elections, ...elections], [elections])

  return (
    <Container>
      <div className={'relative flex h-full'}>
        <div className={'relative flex items-center justify-between overflow-hidden px-[20%]'}>
          <motion.div
            className={'flex space-x-12'}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 20, ease: 'linear' } }}>
            {looped.map((election, idx) => (
              <div key={idx} data-idx={idx} className={'flex gap-12'}>
                <ElectionCard election={election} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Container>
  )
}
