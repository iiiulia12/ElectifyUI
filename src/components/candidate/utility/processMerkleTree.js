const circomlib = require('circomlibjs')
const { MerkleTree } = require('merkletreejs')

export const processMerkleTree = async (data, electionId, voterCommitment) => {
  const poseidon = await circomlib.buildPoseidon()
  const F = poseidon.F
  const merkleRoot = data?.elections?.[0]?.merkleRoot
  const userCommitments = data?.elections?.[0]?.commitments || []
  const bufLeaves = userCommitments.map(l => Buffer.from(l, 'base64'))

  function poseidonHash(data) {
    const left = data.slice(0, 32)
    const right = data.slice(32, 64)
    const out = poseidon([left, right])

    return Buffer.from(out)
  }

  const tree = new MerkleTree(bufLeaves, poseidonHash, {
    hashLeaves: false,
    sortPairs: false
  })

  const proof = tree.getProof(Buffer.from(voterCommitment, 'base64'))
  const pathElements = []
  const pathIndices = []
  proof.forEach(element => {
    const data = poseidon.F.toString(element.data)
    const position = element.position === 'right' ? 0 : 1
    pathElements.push(data)
    pathIndices.push(position)
  })

  return { pathIndices, pathElements, root: poseidon.F.toString(Buffer.from(merkleRoot, 'base64')) }
}
