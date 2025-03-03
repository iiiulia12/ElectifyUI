import Web3 from 'web3'
import { abi } from 'contract/abi'

export const getContract = web3 => {
  const contractABI = abi()
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'

  const contract = new web3.eth.Contract(contractABI, contractAddress)

  return contract
}
