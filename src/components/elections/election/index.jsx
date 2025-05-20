import { Container } from 'components/home/container'
import { Button } from '@headlessui/react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ElectionForm } from 'components/elections/election/electionForm'

export const ElectionDetails = () => {
  const css = '!bg-cloudy/30'
  const hoverClass = ' hover:shadow-[0px_0px_40px_5px] hover:cursor-pointer  hover:shadow-deep-ocean/50'
  const [toggleRegister, setToggleRegister] = useState(false)

  return (
    <Container css={css}>
      {toggleRegister && (
        <div className={'absolute top-0 left-0 w-1/2 h-full flex justify-center items-center'}>
          <ElectionForm />
        </div>
      )}
      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: toggleRegister ? '100%' : '0%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={'w-1/2 rounded-2xl h-full flex flex-col items-center justify-center bg-midnight-blue/85 '}>
        <Button
          onClick={() => setToggleRegister(prev => !prev)}
          className={`flex items-center px-6 py-3 rounded-xl text-2xl bg-dark-cloudy/20 text-accent-light/70 hover:text-primary-light/70 ${hoverClass} `}>
          Register
        </Button>
      </motion.div>
    </Container>
  )
}
