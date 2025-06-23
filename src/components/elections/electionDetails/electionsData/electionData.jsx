import React from 'react'
import { useGetElections } from 'components/hooks/useGetElections'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { LoadingElement } from 'components/elections/electionDetails/electionsData/loadingElement'
import { ElectionMetaData } from 'components/elections/electionDetails/electionsData/electionMetaData'
import { GradientButton } from 'components/home/gradientButton'

export const ElectionData = () => {
  const { electionId } = useParams()
  const { data, isFetching, error } = useGetElections({ electionsId: electionId })
  const router = useRouter()

  const handleOnClick = () => {
    router.push(`/elections/${electionId}/results`)
  }

  if (isFetching) {
    return <LoadingElement title={'Loading election data'} />
  }

  const election = data?.elections?.[0]

  if (!election) {
    return (
      <div className={'flex justify-center items-center py-20'}>
        <div
          className={
            'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8'
          }>
          <span className={'text-white/80 text-lg'}>No election found.</span>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={'max-w-4xl mx-auto mb-12'}>
      <div
        className={
          'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8'
        }>
        <ElectionMetaData election={election} />

        {election.status === 'closed' && (
          <GradientButton
            title={'View Election Results'}
            handleOnClick={handleOnClick}
            outerCss={'shadow-lg hover:shadow-xl hover:shadow-secondary-dark/25 '}
          />
        )}
      </div>
    </motion.div>
  )
}
