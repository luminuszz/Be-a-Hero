/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import req from 'supertest'

import App from '../../src/App'
import { connect } from '../../src/app/database/connection'
import { OngInterface } from '../../src/app/interfaces/OngInterface'
import DataCrypt from '../../src/app/providers/DataCrypt'
import { JwtToken } from '../../src/app/providers/jwt'
const jwt = new JwtToken()

describe('ONG', () => {
  beforeEach(async () => {
    await connect.migrate.rollback()
    await connect.migrate.latest()
  })
  afterAll(async () => {
    await connect.destroy()
  })
  it('should be able to create a new ONG', async () => {
    const response = await req(App)
      .post('/createOngs')
      .send({
        name: 'SDAVdI APE BRASdIl',
        password: '1234523',
        email: 'ongds@ong.com',
        whatsapp: '4d654564654',
        city: 'salvdador',
        uf: 'BA',
        created_at: '123'
      })
    expect(response.status).toEqual(200)
    expect(response.body).toHaveProperty('id')
    expect(response.body.id).toHaveLength(8)
  })

  it('should the all ongs', async () => {
    const user:OngInterface = await connect<OngInterface>('ongs').insert({
      name: 'SDAVdI APE BRASdIl',
      password: await DataCrypt.hashCreate('1234523'),
      email: 'ongds@ong.com',
      whatsapp: '4d654564654',
      city: 'salvdador',
      uf: 'BA',
      id: '123',
      created_at: '123'
    })
    const token = jwt.store('123')
    console.log(token)
    const response = await req(App)
      .get('/ongs')
      .set('Authorization', 'bearer ' + token)
    console.log(response.body)
    expect(response.status).toEqual(200)
  })
})
