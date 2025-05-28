import { saveObjToJson } from 'components/elections/election/utils/saveObjToJson'

export const saveCommitment = (commitment, electionId, cnp) => {
  const storageKey = `voterCommitment_${cnp}_election${electionId}`

  saveObjToJson(commitment, `voterCommitment_${cnp}_election${electionId}.json`)
  console.log(` Saved voter JSON to localStorage under "${storageKey}"`)
}
