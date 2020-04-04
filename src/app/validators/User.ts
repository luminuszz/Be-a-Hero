import * as Yup from 'yup'

import { OngInterface } from '../interfaces/OngInterface'
export const userStoreSchema = Yup.object<OngInterface>().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .required()
    .min(6),

  whatsapp: Yup.string()
    .required()
    .max(12),

  city: Yup.string().required(),

  uf: Yup.string()
    .required()
    .max(2)
})
