import { saveAs } from 'file-saver'

export const saveObjToJson = (obj, filename = 'userCommitment.json') => {
  const blob = new Blob([JSON.stringify(obj, null, 2)], {
    type: 'application/json'
  })
  saveAs(blob, filename)
}
