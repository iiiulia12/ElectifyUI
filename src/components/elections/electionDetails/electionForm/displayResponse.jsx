import { useEffect, useState } from 'react'
import { CheckCircle, AlertOctagon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export const DisplayResponse = ({ isSuccess, data }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (isSuccess && data?.registerVoter) {
      setVisible(true)
      const timeout = setTimeout(() => setVisible(false), 1000)

      return () => clearTimeout(timeout)
    }
  }, [isSuccess, data])

  if (!isSuccess || !data?.registerVoter) {
    return null
  }

  const { success, message } = data.registerVoter

  return (
    <AnimatePresence mode={'wait'}>
      {visible && (
        <motion.div
          key={'response'}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}>
          <div
            className={`bg-white/5 flex items-center p-3 my-4 text-xs font-medium rounded-xl border-l-4 ${
              success ? 'text-secondary-light border-secondary-dark' : 'text-accent-red border-accent-red'
            }`}>
            {success ? <CheckCircle className={'w-5 h-4 mr-2'} /> : <AlertOctagon className={'w-5 h-4 mr-2'} />}
            <span>{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
