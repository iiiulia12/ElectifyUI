import crypto from 'crypto'
import Web3 from 'web3'
const circomlib = require('circomlibjs')

const rand128 = () => BigInt('0x' + crypto.randomBytes(16).toString('hex'))

const signMessage = async message => {
  if (!window.ethereum) {
    throw new Error('No Ethereum provider found')
  }

  const web3 = new Web3(window.ethereum)

  await window.ethereum.request({ method: 'eth_requestAccounts' })
  const accounts = await web3.eth.getAccounts()
  const account = accounts[0]

  const msgHex = web3.utils.utf8ToHex(message)

  return await web3.eth.personal.sign(msgHex, account, '')
}

export const computeCommitment = async message => {
  const signature = await signMessage(message)
  const poseidon = await circomlib.buildPoseidon()
  const trapdoor = rand128()
  const CmtFE = Buffer.from(poseidon([BigInt(signature), trapdoor])) // field element

  return CmtFE.toString('base64')
}
