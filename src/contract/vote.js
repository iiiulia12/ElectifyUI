import { getContract } from 'contract/getContract'
import { getAccount } from 'contract/getAccount'

export const vote = async (abi, address, pA, pB, pC, pubSignals, c1x, c1y, c2) => {
  const contract = await getContract(address, abi)
  const sender = await getAccount()

  try {
    const receipt = await contract.methods.castVote(pA, pB, pC, pubSignals, c1x, c1y, c2).send({ from: sender })

    if (receipt.status) {
      console.log('castVote succeeded!')
    }

    return receipt
  } catch (err) {
    console.error('castVote failed with error:', err)
    throw err
  }
}
