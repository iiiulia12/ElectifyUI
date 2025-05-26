import * as snarkjs from 'snarkjs'
import { fetchServerFiles } from 'components/candidate/utility/fetchServerFiles'
import { encryptVote } from 'components/candidate/utility/encryptVote'

export const generateProof = async (input, electionId) => {
  const { abiResult, witnessJsWASM, witnessJsResult, zkeyResult, verificationKeyResult, pkResult } =
    await fetchServerFiles(electionId)
  const patchedCode = witnessJsResult.replace(
    'require_witness_calculator();',
    'window.witnessCalculatorBuilder = require_witness_calculator();'
  )

  await new Function(patchedCode)()

  const witnessCalculator = await window.witnessCalculatorBuilder(witnessJsWASM)

  const witnessBuffer = await witnessCalculator.calculateWTNSBin(input, 0)

  const { proof, publicSignals } = await snarkjs.groth16.prove(new Uint8Array(zkeyResult), witnessBuffer)

  const verified = await snarkjs.groth16.verify(verificationKeyResult, publicSignals, proof)

  console.log('Proof verified:', verified)
  console.log(proof, publicSignals)

  await encryptVote(input, pkResult)

  return { proof, publicSignals }
}
