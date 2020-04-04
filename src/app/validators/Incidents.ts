import * as Yup from 'yup'

import { IncidentInterface } from '../interfaces/IncidentInterface'
export const incidentStoreSchema = Yup.object<IncidentInterface>().shape({
  title: Yup.string().required(),
  descritpion: Yup.string().required(),
  value: Yup.number().required()

})
