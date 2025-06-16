import { getContract } from 'contract/getContract'
import { getAccount } from 'contract/getAccount'

export const vote = async (abi, address, pA, pB, pC, pubSignals, c1x, c1y, c2) => {
  const contract = await getContract(address, abi)
  const sender = await getAccount()
  console.log('Sending vote with:')
  console.log({ pA, pB, pC, pubSignals, c1x, c1y, c2, from: sender })

  try {
    const receipt = await contract.methods.castVote(pA, pB, pC, pubSignals, c1x, c1y, c2).send({ from: sender })
    console.log('receipt', receipt)

    if (receipt.status) {
      console.log('Vote succeeded!')
    } else {
      console.warn('Vote transaction failed.')
    }

    console.log('Transaction Receipt:')
    console.log('Hash:', receipt.transactionHash)
    console.log('From:', receipt.from)
    console.log('To:', receipt.to)
    console.log('Block:', receipt.blockNumber)
    console.log('Gas used:', receipt.gasUsed)
    console.log('Logs:', receipt.logs)

    return {
      success: receipt.status,
      message: receipt.status ? 'Vote successful!' : 'Vote failed.',
      sentValues: { pA, pB, pC, pubSignals, c1x, c1y, c2, from: sender },
      receiptSummary: {
        transactionHash: receipt.transactionHash,
        blockNumber: receipt.blockNumber,
        gasUsed: receipt.gasUsed
      },
      receipt
    }
  } catch (err) {
    console.error('castVote failed:', err)

    return {
      success: false,
      message: 'An error occurred while sending your vote.',
      sentValues: { pA, pB, pC, pubSignals, c1x, c1y, c2, from: sender },
      error: err
    }
  }
}
