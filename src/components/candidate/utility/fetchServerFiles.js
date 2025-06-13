import { getFileFromServer } from 'serverFiles/getFileFromServer'

export const fetchServerFiles = async electionId => {
  const abiResult = await getFileFromServer('abi.json', electionId)
  const witnessJsResult = await getFileFromServer('witness_calculator.bundle.js', electionId)
  const witnessJsWASM = await getFileFromServer(`proveVote_${electionId}.wasm`, electionId)
  const zkeyResult = await getFileFromServer('proveVote_final.zkey', electionId)
  const verificationKeyResult = await getFileFromServer('verification_key.json', electionId)
  const pkResult = await getFileFromServer('pk.json')

  return { abiResult, witnessJsWASM, witnessJsResult, zkeyResult, verificationKeyResult, pkResult }
}
