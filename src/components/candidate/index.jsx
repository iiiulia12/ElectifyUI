import React, { useRef } from 'react'
import { useGetCandidates } from 'components/hooks/useGetCandidates'
import { useParams } from 'next/navigation'
import { Button } from '@headlessui/react'
import { processMerkleTree } from 'components/candidate/utility/processMerkleTree'
import { useGetElections } from 'components/hooks/useGetElections'
import { processVote } from 'components/candidate/utility/processVote'
import { makeVoteInput } from 'components/candidate/utility/makeVoteInput'
import { generateProof } from 'components/candidate/utility/generateProof'

export const Candidate = () => {
  const { electionId } = useParams()
  const { data } = useGetCandidates({ electionId: Number(electionId) })
  const candidates = data?.candidates.map(c => ({ id: c.id, ...c.candidateProfile })) || []
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
    <div className={'flex flex-wrap justify-center gap-6 p-6'}>
      {candidates.map(candidate => (
        <div key={candidate.id} className={'w-64 bg-white rounded-2xl shadow-lg overflow-hidden'}>
          <div className={'p-4'}>
            <h3 className={'text-xl font-semibold mb-2'}>
              {candidate.firstName} {candidate.lastName}
            </h3>
            <p className={'text-sm text-gray-500 mb-1'}>DOB: {candidate.dateOfBirth}</p>
            <p className={'text-sm text-gray-500 mb-1'}>CNP: {candidate.cnp}</p>
            <p className={'text-sm text-gray-500 mb-3'}>Address: {candidate.address}</p>
            <Button
              onClick={() => handleVote(candidate.id)}
              className={'w-full py-2 bg-accent-light text-white rounded-xl hover:bg-accent-dark focus:outline-none'}>
              Vote
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
