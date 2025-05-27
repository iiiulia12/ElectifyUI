import { saveObjToJson } from 'components/elections/election/utils/saveObjToJson'

export const saveCommitment = (commitment, electionId, cnp) => {
  const storageKey = `voterCommitment_${cnp}`

  if (!localStorage.getItem(storageKey)) {
    localStorage.setItem(storageKey, JSON.stringify(commitment))
    saveObjToJson(commitment, `voterCommitment_${cnp}.json`)
    console.log(` Saved voter JSON to localStorage under "${storageKey}"`)
  } else {
    console.log(`Voter JSON already present under "${storageKey}", skipping save`)
  }
}
