import { validate } from 'components/election/utils/yup/validate'

export const ElectionForm = ({ contract }) => {
  const handleSubmit = async e => {
    e.preventDefault()

    const formData = {
      name: e.target.name.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value
    }
    await validate(formData, contract)
  }

  return (
    <div className={'flex flex-row items-center justify-center w-full mt-10'}>
      <form onSubmit={handleSubmit} className={'flex flex-col gap-3 w-50%'}>
        <input type={'text'} name={'name'} placeholder={'Election Name'} />
        <input type={'datetime-local'} name={'startDate'} placeholder={'Start Date'} />
        <input type={'datetime-local'} name={'endDate'} placeholder={'End Date'} />

        <button type={'submit'}>Create Election</button>
      </form>
    </div>
  )
}
