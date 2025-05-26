import { useGetCandidates } from 'components/hooks/useGetCandidates'
import { useParams } from 'next/navigation'
import { Button } from '@headlessui/react'
import { processMerkleTree } from 'components/candidate/utility/processMerkleTree'
import { useGetElections } from 'components/hooks/useGetElections'
import { processVote } from 'components/candidate/utility/processVote'
import { makeVoteInput } from 'components/candidate/utility/makeVoteInput'
import { saveObjToJson } from 'components/elections/election/utils/saveObjToJson'
import { generateProof } from 'components/candidate/utility/generateProof'

export const Candidate = () => {
  const { electionId } = useParams()
  const { data } = useGetCandidates({ electionId: 2 })
  const candidates = data?.candidates.map(candidate => ({ id: candidate.id, ...candidate.candidateProfile }))
  const numberOfCandidates = candidates?.length || 0
  const { data: electionsData } = useGetElections({ electionsId: electionId })

  const handleVote = async vote => {
    const merkleDetails = await processMerkleTree(
      electionsData,
      electionId,
      'fH5GfiJ03E3FE3fI2It1B5wyyf3hiDs1a9JMV/ZD8SU=' //TODO din jsonul descarcat
    )
    const voteDetails = await processVote(vote, numberOfCandidates) //TODO add election id
    const voteInput = makeVoteInput(merkleDetails, voteDetails, electionId)
    saveObjToJson(voteInput, 'input.json')
    await generateProof(voteInput, electionId)
  }

  return (
    <div className={'h-full w-full flex flex-col items-center justify-center'}>
      {candidates?.map(candidate => {
        const candidateId = candidate.id

        return (
          <Button
            key={candidate.id}
            onClick={async () => await handleVote(candidateId)}
            className={'p-2 hover:cursor-pointer bg-accent-light rounded-2xl my-2'}>
            {candidate.firstName} {candidate.lastName}
          </Button>
        )
      })}
    </div>
  )
}
