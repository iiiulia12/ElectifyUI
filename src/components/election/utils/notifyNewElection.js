export const notifyNewElection = (setElections, contract) => {
  contract.events.ElectionCreated({}).on('data', event => {
    setElections(event.returnValues)
  })
}
