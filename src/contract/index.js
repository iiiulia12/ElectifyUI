import Web3 from 'web3'

export const contract = async setVotes => {
  console.log('Contract...')
  const web3 = new Web3('ws://localhost:8545')
  const contractABI = [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          components: [
            {
              internalType: 'string',
              name: 'name',
              type: 'string'
            },
            {
              internalType: 'uint256',
              name: 'numberOfVotes',
              type: 'uint256'
            }
          ],
          indexed: false,
          internalType: 'struct VotingSystem.Candidate[]',
          name: 'candidates',
          type: 'tuple[]'
        }
      ],
      name: 'UpdateVotes',
      type: 'event'
    },
    {
      inputs: [],
      name: 'getVotes',
      outputs: [
        {
          components: [
            {
              internalType: 'string',
              name: 'name',
              type: 'string'
            },
            {
              internalType: 'uint256',
              name: 'numberOfVotes',
              type: 'uint256'
            }
          ],
          internalType: 'struct VotingSystem.Candidate[]',
          name: '',
          type: 'tuple[]'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: '_nameofCandidate',
          type: 'string'
        }
      ],
      name: 'vote',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ]
  const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
  const contract = new web3.eth.Contract(contractABI, contractAddress)
  const accounts = await web3.eth.getAccounts()
  const sender = accounts[6]

  // await contract.methods.vote('Atiku').send({ from: sender, gas: 3000000 }, (error, txHash) => {
  //   if (!error) {
  //     console.log('Transaction hash:', txHash)
  //   }
  //
  //   console.log('Error', error)
  // })

  // try {
  //   // Call getVotes using .call() and return the result.
  //   const votes = await contract.methods.getVotes().call({ from: sender })
  //   console.log('Votes:', votes)
  //
  //   return votes
  // } catch (error) {
  //   console.error('Error calling getVotes:', error)
  //   throw error
  // }
  console.log(contract)

  return contract.events.UpdateVotes({}).on('data', event => {
    console.log(event)
    console.log('Event received:', event.returnValues)
    setVotes(event.returnValues.candidates)
  })
}
