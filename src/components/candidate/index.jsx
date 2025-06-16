import React, { useState } from 'react'
import { useGetCandidates } from 'components/hooks/useGetCandidates'
import { useParams } from 'next/navigation'
import { handleVote } from 'components/candidate/utility/handleVote'
import { useGetElections } from 'components/hooks/useGetElections'
import { motion } from 'framer-motion'
import { CandidateCard } from 'components/candidate/candidateCard'
import { FooterNotice } from 'components/candidate/footerNotice'
import { Modal } from 'components/modal'
import { makeVoteResultText } from 'components/candidate/utility/makeVoteResultText'

export const Candidate = () => {
  const { electionId } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  const { data } = useGetCandidates({ electionId: Number(electionId) })
  const candidates =
    data?.candidates.map(c => ({
      id: c.id,
      education: c.education,
      civilStatus: c.civilStatus,
      ...c.candidateProfile
    })) || []
  const maxId = candidates.length ? Math.max(...candidates.map(c => c.id)) : null
  const { data: electionsData } = useGetElections({ electionsId: electionId })

  const castVote = async candidateId => {
    const result = await handleVote(candidateId, electionsData, electionId, maxId)
    const message = makeVoteResultText(result)
    setModalMessage(message)
    setIsModalOpen(true)
  }

  if (!candidates.length) {
    return (
      <div className={'flex justify-center items-center py-20'}>
        <div
          className={
            'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8'
          }>
          <span className={'text-white/80 text-lg'}>No candidates found for this election.</span>
        </div>
      </div>
    )
  }

  return (
    <>
      {' '}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={'max-w-7xl mx-auto'}>
        <div className={'text-center mb-12'}>
          <h2 className={'text-4xl font-bold text-light-sky-blue mb-4'}>Election Candidates</h2>
          <p className={'text-xl text-light-sky-blue/90 max-w-2xl mx-auto'}>
            Select your preferred candidate and cast your secure, blockchain-verified vote
          </p>
        </div>

        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}>
          {candidates.map((candidate, index) => (
            <CandidateCard key={index} candidate={candidate} index={index} castVote={castVote} />
          ))}
        </div>
        <FooterNotice />
      </motion.div>
      {isModalOpen && <Modal text={modalMessage} closeModal={setIsModalOpen} />}
    </>
  )
}
