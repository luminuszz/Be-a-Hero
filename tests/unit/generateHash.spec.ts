/* eslint-disable no-undef */

import DataCrypt from '../../src/app/providers/DataCrypt'

describe('Hash passowrd', () => {
  it('should return one passsword hash', () => {
    const passowrd = '123'

    const passowrdHash = DataCrypt.hashCreate(passowrd)

    expect(passowrdHash)
  })

  it('should return passowrd equal to hash password', async () => {
    const passowrd = '123'
    const passowrdHash = await DataCrypt.hashCreate(passowrd)

    const response = await DataCrypt.compareHash(passowrd, passowrdHash)

    expect(response).toBe(true)
  })
})
