/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-undef */
import req from 'supertest'

import App from '../../src/App'
import { connect } from '../../src/app/database/connection'
import { OngInterface } from '../../src/app/interfaces/OngInterface'
import DataCrypt from '../../src/app/providers/DataCrypt'

describe('Session', () => {
  beforeEach(async () => {
    await connect.migrate.rollback()
    await connect.migrate.latest()
  })
  afterAll(async () => {
    await connect.destroy()
  })
  it('should be able to create a session', async () => {
    const user: OngInterface = await connect<OngInterface>('ongs').insert({
      name: 'SDAVdI APE BRASdIl',
      password: await DataCrypt.hashCreate('12345'),
      email: 'ongds@ong.com',
      whatsapp: '4d654564654',
      city: 'salvdador',
      uf: 'BA',
      id: '12dsad3',
      created_at: '123'
    })

    const response = await req(App)
      .post('/login')
      .send({
        id: '12dsad3',
        password: '12345'
      })
    console.log(response.body)

    expect(response.status).toEqual(200)
    expect(response.body).toHaveProperty('token')
    expect(response.body.user).toHaveProperty('email')
    expect(response.body.user).toHaveProperty('name')
  })
})
