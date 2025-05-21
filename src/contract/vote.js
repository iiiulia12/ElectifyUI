export const vote = async (contract, web3, name) => {
  const accounts = await web3.eth.getAccounts()
  const sender = accounts[0]

  // await contract.methods.createElection('election1', 1740949200, 1741208400).send({ from: sender })
  // await contract.methods.createElection('election1', 1740949200, 1741208400).send({ from: sender })

  await contract.methods.accreditVoter(0, sender).send({ from: sender })

  await contract.methods.vote(0, name).send({ from: sender })
}
