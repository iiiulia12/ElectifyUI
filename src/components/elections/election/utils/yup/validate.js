import { schema } from 'components/elections/election/utils/yup/schema'
import { computeCommitment } from 'components/elections/election/utils/computeCommitment'

export const validate = async (formData, contract) =>
  schema.validate(formData).then(async value => {
    const commitmentComputed = await computeCommitment(value.commitment)

    return {
      voter: {
        ...value,
        commitment: commitmentComputed.commitment
      },
      json: commitmentComputed
    }
  })
