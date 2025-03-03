import Web3 from 'web3'

export const getWeb3 = () => {
  const web3 = new Web3('ws://localhost:8545')

  return web3
}
