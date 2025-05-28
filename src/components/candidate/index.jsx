import React, { useRef } from 'react'
import { useGetCandidates } from 'components/hooks/useGetCandidates'
import { useParams } from 'next/navigation'
import { Button } from '@headlessui/react'
import { processMerkleTree } from 'components/candidate/utility/processMerkleTree'
import { useGetElections } from 'components/hooks/useGetElections'
import { processVote } from 'components/candidate/utility/processVote'
import { makeVoteInput } from 'components/candidate/utility/makeVoteInput'
import { generateProof } from 'components/candidate/utility/generateProof'
import moment from 'moment/moment'

export const Candidate = () => {
  const { electionId } = useParams()
  const { data } = useGetCandidates({ electionId: Number(electionId) })
  const candidates =
    data?.candidates.map(c => ({
      id: c.id,
      education: c.education,
      civilStatus: c.civilStatus,
      ...c.candidateProfile
    })) || []
  const numberOfCandidates = candidates.length
  const { data: electionsData } = useGetElections({ electionsId: electionId })

  const handleVote = async candidateId => {
    const [handle] = await window.showOpenFilePicker({
      types: [
        {
          description: 'Voter JSON',
          accept: { 'application/json': ['.json'] }
        }
      ],
      multiple: false
    })
    const file = await handle.getFile()

    const text = await file.text()
    const json = JSON.parse(text)

    const merkleDetails = await processMerkleTree(electionsData, electionId, json.commitment)
    const voteDetails = await processVote(candidateId, numberOfCandidates, electionId)
    const voteInput = makeVoteInput(merkleDetails, voteDetails, electionId, json)
    const contractAddress = electionsData?.elections?.[0]?.contractAddress || ''
    await generateProof(voteInput, electionId, contractAddress)
  }

  return (
    <div className={'flex flex-wrap justify-center gap-12 p-6 my-32 w-full h-[80vh] '}>
      {candidates.map(candidate => (
        <div
          key={candidate.id}
          className={
            'w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between'
          }>
          <div className={'p-6 flex-1'}>
            <h3 className={'text-xl font-semibold mb-4'}>
              {candidate.firstName} {candidate.lastName}
            </h3>
            <p className={'text-sm text-gray-500 mb-2'}>Academic Qualification: {candidate.education}</p>
            <p className={'text-sm text-gray-500 mb-4'}>Marital Status: {candidate.civilStatus}</p>
            <p className={'text-sm text-gray-500 mb-4'}>
              Date of birth: {moment(Number(candidate.dateOfBirth)).format('dddd, MMMM D, YYYY ')}
            </p>
          </div>
          <div className={'p-4'}>
            <Button
              onClick={() => handleVote(candidate.id)}
              className={
                'w-full py-3 bg-accent-light text-white rounded-xl hover:bg-accent-dark hover: cursor-pointer'
              }>
              Vote
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
