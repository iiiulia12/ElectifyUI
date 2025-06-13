import { vote } from 'contract/vote'
import { encryptVote } from 'components/candidate/utility/encryptVote'
import * as snarkjs from 'snarkjs'

export const castVote = async (abiResult, contractAddress, input, pkResult, proof, publicSignals) => {
  const encryptedNonce = await encryptVote(input, pkResult)
  const callData = await snarkjs.groth16.exportSolidityCallData(proof, publicSignals)
  const clean = callData.replace(/\s+/g, '')
  const json = `[${clean}]`
  const [pA, pB, pC, pubSignals] = JSON.parse(json)
  const [c1x, c1y] = encryptedNonce.C1
  console.log(pA, pB, pC, pubSignals)
  await vote(abiResult, contractAddress, pA, pB, pC, pubSignals, c1x, c1y, encryptedNonce.C2)
}
