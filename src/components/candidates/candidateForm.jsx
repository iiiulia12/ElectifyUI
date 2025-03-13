import * as Yup from 'yup'

export const CandidateForm = () => {
  const schema = Yup.object().shape({
    name: Yup.string().required().min(3).max(25),
    startDate: Yup.string().email().email().label('Email'),
    endDate: Yup.string().required().min(8).max(25)
  })

  const handleSubmit = e => {
    e.preventDefault()

    const formData = {
      name: e.target.name.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value
    }

    const errors = schema.validate(formData)

    if (errors.length > 0) {
      alert(errors.join('\n'))
    } else {
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type={'text'} name={'name'} placeholder={'Election Name'} />
      <input type={'datetime-local'} name={'startDate'} placeholder={'Start Date'} />
      <input type={'datetime-local'} name={'endDate'} placeholder={'End Date'} />

      <button type={'submit'}>Create Election</button>
    </form>
  )
}
