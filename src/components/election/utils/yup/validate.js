import { schema } from 'components/election/utils/yup/schema'
import { createElection } from 'components/election/utils/createElection'

export const validate = async (formData, contract) => {
  schema
    .validate(formData)
    .then(async value => {
      await createElection(value, contract)
    })
    .catch(function (err) {
      console.log(err)
    })
}
