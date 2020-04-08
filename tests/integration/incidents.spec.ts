/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import req from 'supertest'

import App from '../../src/App'
import { connect } from '../../src/app/database/connection'
import { IncidentControllerInterface } from '../../src/app/interfaces/IncidentInterface'
import DataCrypt from '../../src/app/providers/DataCrypt'
import { JwtToken } from '../../src/app/providers/jwt'
const jwt = new JwtToken()

describe('Incidents', () => {
  beforeEach(async () => {
    await connect.migrate.rollback()
    await connect.migrate.latest()
  })
  afterAll(async () => {
    await connect.destroy()
  })

  it('should be able create to a new incident', async () => {
    const user = await connect('ongs').insert({
      name: 'SDAVdI APE BRASdIl',
      password: await DataCrypt.hashCreate('12345'),
      email: 'ongds@ong.com',
      whatsapp: '4d654564654',
      city: 'salvdador',
      uf: 'BA',
      id: '12dsad3',
      created_at: '123'
    })

    const login = await req(App)
      .post('/login')
      .send({
        id: '12dsad3',
        password: '12345'
      })
    const response = await req(App)
      .post('/incidents')
      .set('Authorization', 'bearer ' + login.body.token)
      .send({
        title: 'casd43aasso43sd5dsfddassfdsa2',
        description: 'dadsfssad54ds3dsadsdds34dsdfasada',
        value: 45
      })
    expect(response.status).toEqual(200)
  })
})
