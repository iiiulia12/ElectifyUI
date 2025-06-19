import React from 'react'
import { Container } from 'components/home/container'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ElectionForm } from 'components/elections/electionDetails/electionForm/electionForm'
import { Candidate } from 'components/candidate'
import { ElectionData } from 'components/elections/electionDetails/electionsData/electionData'
import { BackgroundCirclesEffect } from 'components/home/backgroundCirclesEffect'
import { GradientButton } from 'components/home/gradientButton'

export const ElectionDetails = () => {
  const [toggleRegister, setToggleRegister] = useState(false)
  const containerCss = 'bg-gradient-to-br from-blackish-blue  via-midnight-blue to-navy-blue'

  return (
    <Container css={containerCss}>
      <BackgroundCirclesEffect />

      <div className={'relative z-10 p-10'}>
        <div className={'mb-12'}>
          <ElectionData />
        </div>

        <AnimatePresence mode={'wait'}>
          {toggleRegister ? (
            <motion.div
              key={'form'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={'mb-8'}>
              <ElectionForm />
            </motion.div>
          ) : (
            <motion.div
              key={'candidates'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={'mb-8'}>
              <Candidate />
            </motion.div>
          )}
        </AnimatePresence>

        <div className={'flex justify-center mt-12'}>
          <GradientButton
            handleOnClick={() => setToggleRegister(prev => !prev)}
            title={toggleRegister ? 'View Candidates' : 'Register to Vote'}
            outerCss={'shadow-lg hover:shadow-xl hover:shadow-secondary-dark/25 '}
          />
        </div>
      </div>
    </Container>
  )
}
