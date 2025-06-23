import { processMerkleTree } from 'components/candidate/utility/processMerkleTree'
import { processVote } from 'components/candidate/utility/processVote'
import { makeVoteInput } from 'components/candidate/utility/makeVoteInput'
import { generateProof } from 'components/candidate/utility/generateProof'

export const handleVote = async (candidateId, electionsData, electionId, maxId) => {
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
  const voteDetails = await processVote(candidateId, maxId, electionId)
  const voteInput = makeVoteInput(merkleDetails, voteDetails, electionId, json)
  const contractAddress = electionsData?.elections?.[0]?.contractAddress || ''

  return await generateProof(voteInput, electionId, contractAddress)
}
