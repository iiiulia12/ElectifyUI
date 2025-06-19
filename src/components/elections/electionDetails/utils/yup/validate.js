import { schema } from 'components/elections/electionDetails/utils/yup/schema'
import { computeCommitment } from 'components/elections/electionDetails/utils/computeCommitment'

export const validate = async formData =>
  schema.validate(formData).then(async value => {
    const commitmentComputed = await computeCommitment(value.cnp)

    return {
      voter: {
        ...value,
        commitment: commitmentComputed.commitment
      },
      json: commitmentComputed
    }
  })
