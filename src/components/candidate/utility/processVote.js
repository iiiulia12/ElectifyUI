import crypto from 'crypto'
const circomlib = require('circomlibjs')

const rand128 = () => BigInt('0x' + crypto.randomBytes(16).toString('hex'))

export const processVote = async (vote, numberOfCandidates, electionId = 4) => {
  const poseidon = await circomlib.buildPoseidon()
  const F = poseidon.F
  const nonce = rand128()
  const CmtFE = poseidon([vote, nonce])
  const Commit = F.toString(CmtFE)
  const N = numberOfCandidates

  return {
    vote: vote.toString(),
    nonce: nonce.toString(),
    Commit,
    N
  }
}
