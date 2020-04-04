import * as Yup from 'yup'

import { OngInterface } from '../interfaces/OngInterface'
export const sessionSchema = Yup.object<OngInterface>().shape({
  id: Yup.string().required(),
  password: Yup.string().required()
})

export type Session = Yup.InferType<typeof sessionSchema>;
