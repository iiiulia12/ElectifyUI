import web3 from 'web3'

export const getCandidates = async (contract, web3) => {
  const accounts = await web3.eth.getAccounts()
  const sender = accounts[0]

  const candidates = await contract.methods.getCandidates(1).call({ from: sender })

  return candidates
}
