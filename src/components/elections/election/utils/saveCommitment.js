import { saveObjToJson } from 'components/elections/election/utils/saveObjToJson'

export const saveCommitment = (commitment, electionId, cnp, electionCommitments) => {
  const storageKey = `voterCommitment_${cnp}_election${electionId}`

  console.log(electionCommitments)

  if (electionCommitments.includes(commitment?.commitment)) {
    saveObjToJson(commitment, `voterCommitment_${cnp}_election${electionId}.json`)
    console.log(` Saved voter JSON to localStorage under "${storageKey}"`)
  } else {
    console.log(`Voter JSON already present under "${storageKey}", skipping save`)
  }
}
