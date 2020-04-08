/* eslint-disable no-undef */
import DataCrypt from '../../src/app/providers/DataCrypt'
describe('Generate unique ID', () => {
  it('should generate unique ID', () => {
    const id = DataCrypt.randonId()
    expect(id).toHaveLength(8)
  })
})
