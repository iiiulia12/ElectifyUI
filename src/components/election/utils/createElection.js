import { getAccount } from 'contract/getAccount'

export const createElection = async (formValues, contract) => {
  const account = await getAccount()
  const startDate = new Date(formValues.startDate)
  const endDate = new Date(formValues.endDate)

  const startDateUnix = Math.floor(startDate.getTime() / 1000)
  const endDateUnix = Math.floor(endDate.getTime() / 1000)

  await contract.methods.createElection(formValues.name, startDateUnix, endDateUnix).send({ from: account })
}
