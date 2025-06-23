import React, { useMemo, useState, useEffect } from 'react'
import { useGetElections } from 'components/hooks/useGetElections'
import { ElectionCard } from 'components/elections/electionCarousel/electionCard/electionCard'
import { Container } from 'components/home/container'
import { motion, useAnimationControls } from 'framer-motion'
import { BackgroundCirclesEffect } from 'components/home/backgroundCirclesEffect'
import { ElectionCarouselHeader } from 'components/elections/electionCarousel/electionCarouselHeader'

export const ElectionCarousel = () => {
  const { data } = useGetElections()
  const elections = useMemo(() => data?.elections || [], [data])
  const looped = useMemo(() => [...elections, ...elections], [elections])
  const containerCss = 'bg-gradient-to-br from-blackish-blue via-midnight-blue to-secondary-very-dark'

  const [isPaused, setIsPaused] = useState(false)
  const controls = useAnimationControls()
  const duration = elections.length > 3 ? 30 : 20

  useEffect(() => {
    if (!isPaused && elections.length > 0) {
      controls.start({
        x: [null, '-50%'],
        transition: {
          duration: duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop'
        }
      })
    } else {
      controls.stop()
    }
  }, [isPaused, elections.length, duration, controls])

  const handleMouseEnter = () => {
    setIsPaused(true)
  }

  const handleMouseLeave = () => {
    setIsPaused(false)
  }

  return (
    <Container css={containerCss}>
      <BackgroundCirclesEffect />

      <div className={'relative z-10 py-20'}>
        <ElectionCarouselHeader elections={elections} />
        <div className={'relative'}>
          <div className={'relative flex h-full '}>
            <motion.div
              className={'flex space-x-8'}
              animate={controls}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              {looped.map((election, idx) => (
                <motion.div
                  key={`${election.id}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}>
                  <ElectionCard election={election} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Container>
  )
}
