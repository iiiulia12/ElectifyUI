import { validate } from 'components/elections/electionDetails/utils/yup/validate'
import { useRegisterVoter } from 'components/hooks/useRegisterVoter'
import { useParams } from 'next/navigation'
import { saveCommitment } from 'components/elections/electionDetails/utils/saveCommitment'
import { useEffect, useState } from 'react'
import { DisplayResponse } from 'components/elections/electionDetails/electionForm/displayResponse'
import { motion } from 'framer-motion'
import { GradientElement } from 'components/home/gradientElement'
import { FormInput } from 'components/elections/electionDetails/electionForm/formInput'
import { GradientButton } from 'components/home/gradientButton'

export const ElectionForm = () => {
  const { electionId } = useParams()
  const { mutate, isSuccess, data } = useRegisterVoter()

  const [voter, setVoter] = useState(null)
  const [jsonData, setJsonData] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      cnp: e.target.cnp.value
    }

    try {
      const validation = await validate(formData)
      const { json, voter } = validation
      console.log('validated voter object:', voter)

      setJsonData(json)
      setVoter(voter)

      mutate({ ...voter, electionId: Number(electionId) })
    } catch (err) {
      console.error('Validation failed', err)
    }
  }

  useEffect(() => {
    if (data?.registerVoter?.success === true) {
      saveCommitment(jsonData, electionId, voter?.cnp)
    }
  }, [electionId, jsonData, voter?.cnp, data?.registerVoter?.success])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={'max-w-2xl mx-auto'}>
      <div
        className={
          'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8'
        }>
        <h2 className={'text-3xl font-bold text-white mb-2 text-center'}>Voter Registration</h2>
        <GradientElement />
        <form onSubmit={handleSubmit} className={'space-y-6 mt-12'}>
          <div className={'grid grid-cols-1 md:grid-cols-2 gap-6'}>
            <FormInput name={'firstName'} label={'First Name'} type={'text'} placeholder={'Enter your first name'} />
            <FormInput name={'lastName'} label={'Last Name'} type={'text'} placeholder={'Enter your last name'} />
            <FormInput
              name={'cnp'}
              label={'Personal Identification Number (CNP)'}
              type={'text'}
              placeholder={'Enter your CNP'}
            />
          </div>
          <GradientButton
            title={'Register'}
            type={'submit'}
            innerCss={'bg-gradient-to-r  from-yellow/20 to-yellow/15 w-full'}
            outerCss={
              'w-full bg-gradient-to-r from-yellow/10 to-secondary-light/20 shadow-lg hover:shadow-xl hover:shadow-secondary-dark/25 '
            }
          />
        </form>

        <DisplayResponse data={data} isSuccess={isSuccess} />
      </div>
    </motion.div>
  )
}
