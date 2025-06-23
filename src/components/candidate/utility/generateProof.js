import * as snarkjs from 'snarkjs'
import { fetchServerFiles } from 'components/candidate/utility/fetchServerFiles'
import { castVote } from 'components/candidate/utility/castVote'

export const generateProof = async (input, electionId, contractAddress) => {
  const { abiResult, witnessJsWASM, witnessJsResult, zkeyResult, verificationKeyResult, pkResult } =
    await fetchServerFiles(electionId)
  const patchedCode = witnessJsResult.replace(
    'require_witness_calculator();',
    'window.witnessCalculatorBuilder = require_witness_calculator();'
  )

  await new Function(patchedCode)()

  try {
    console.log('input: ', input)
    const witnessCalculator = await window.witnessCalculatorBuilder(witnessJsWASM)

    const witnessBuffer = await witnessCalculator.calculateWTNSBin(input, 0)
    const { proof, publicSignals } = await snarkjs.groth16.prove(new Uint8Array(zkeyResult), witnessBuffer)

    const verified = await snarkjs.groth16.verify(verificationKeyResult, publicSignals, proof)

    console.log('Proof verified: ', verified)
    console.log('Proof : ', proof)
    console.log('Voted with input: ', input)

    return await castVote(abiResult, contractAddress, input, pkResult, proof, publicSignals)
  } catch (error) {
    console.error('ZK Proof generation/verification error:', error)

    return {
      success: false,
      message: 'An error occurred during ZK proof generation or verification.',
      sentValues: null,
      receiptSummary: null,
      error
    }
  }
}
