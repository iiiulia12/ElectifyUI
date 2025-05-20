import * as Yup from 'yup'

export const schema = Yup.object().shape({
  firstName: Yup.string().required().min(3).max(25),
  lastName: Yup.string().required().min(3).max(25),
  cnp: Yup.string().required().min(13).max(13),
  commitment: Yup.string().required().min(3)
})
