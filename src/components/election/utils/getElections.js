import moment from 'moment'

export const getElections = async contract => {
  console.log('getElections')
  console.log(contract)
  const elections = await contract.methods.getElectionDetails().call()
  console.log(elections)

  const { 0: names, 1: startDates, 2: endDates } = elections

  console.log(elections)

  return names.map((name, index) => ({
    name,
    startDate: moment.unix(Number(startDates[index])).format('MM/DD/YYYY'),
    endDate: moment.unix(Number(endDates[index])).format('MM/DD/YYYY')
  }))
}
