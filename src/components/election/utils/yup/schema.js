import * as Yup from 'yup'

export const schema = Yup.object().shape({
  name: Yup.string().required().min(3).max(25),
  startDate: Yup.date().max(Yup.ref('endDate'), 'Start date must be before end date'),
  endDate: Yup.date().required('End date is required')
})
