import { getWeb3 } from 'contract/getWeb3'

export const getContract = (address, abi) => {
  const web3 = getWeb3()
  const contract = new web3.eth.Contract(abi, address)

  return contract
}
