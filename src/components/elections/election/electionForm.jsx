import { validate } from 'components/elections/election/utils/yup/validate'
import { useRegisterVoter } from 'components/hooks/useRegisterVoter'
import { useParams } from 'next/navigation'
import { saveObjToJson } from 'components/elections/election/utils/saveObjToJson'

export const ElectionForm = ({ contract }) => {
  const { electionId } = useParams()
  const { mutate, error, data, isSuccess } = useRegisterVoter()
  console.log('election id:', electionId)

  const handleSubmit = async e => {
    e.preventDefault()

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      cnp: e.target.cnp.value,
      commitment: e.target.commitment.value
    }

    try {
      const validation = await validate(formData, contract)
      const { json } = validation
      const { voter } = validation
      console.log('🚀 validated voter object:', voter)
      await mutate({ ...voter, electionId: Number(electionId) })
      console.log(data)
      saveObjToJson(json)
    } catch (err) {
      console.error('Validation failed', err)
    }
  }

  return (
    <div
      className={
        'flex flex-row items-center justify-center w-[50vh] h-[60vh] gap-3 mt-10 border rounded-2xl border-accent-dark '
      }>
      <form onSubmit={handleSubmit} className={'flex flex-col gap-3 w-50%'}>
        <input
          type={'text'}
          name={'firstName'}
          placeholder={'First Name'}
          className={'p-2 border rounded-2xl border-accent-dark'}
        />
        <input
          type={'text'}
          name={'lastName'}
          placeholder={'Last Name'}
          className={'p-2 border rounded-2xl border-accent-dark'}
        />
        <input type={'text'} name={'cnp'} placeholder={'CNP'} className={'p-2 border rounded-2xl border-accent-dark'} />
        <input
          type={'text'}
          name={'commitment'}
          placeholder={'Commitment'}
          className={'p-2 border rounded-2xl border-accent-dark'}
        />
        <button
          type={'submit '}
          className={
            'mt-6 text-accent-dark/70 bg-cloudy/10 text-lg rounded-xl hover:shadow-[0px_0px_20px_5px] hover:cursor-pointer hover:bg-cloudy/5 hover:shadow-accent-dark/40'
          }>
          Register
        </button>
        {data && <div>{data?.registerVoter}</div>}
      </form>
    </div>
  )
}
