export const getContract = (web3, address, abi) => {
  const contractABI = abi()

  return new web3.eth.Contract(contractABI, address)
}
