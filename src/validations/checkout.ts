import * as yup from 'yup'

export const submitCheckoutSchema = yup.object({
  code: yup.string().required(),
  address: yup.string().required(),
  number: yup.number().required(),
  complement: yup.string().optional(),
  neighborhood: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required()
})

export type SubmitCheckoutType = yup.InferType<typeof submitCheckoutSchema>
