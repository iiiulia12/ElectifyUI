import moment from 'moment'

export const getElections = async contract => {
  const elections = await contract.methods.getElections().call()
  const { 0: names, 1: startDates, 2: endDates } = elections

  return names.map((name, index) => ({
    name,
    startDate: moment.unix(Number(startDates[index])).format('MM/DD/YYYY'),
    endDate: moment.unix(Number(endDates[index])).format('MM/DD/YYYY')
  }))
}
