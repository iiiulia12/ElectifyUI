export const getCandidates = async (contract, web3) => {
  return await contract.methods.getCandidates(0).call()
}
