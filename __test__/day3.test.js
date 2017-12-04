'use strict'
const { solve } = require('../src/day3')

describe('Day 3', () => {
  it('should pass description input (spiralMemory)', async done => {
    expect(solve(1).firstStar).toEqual(0)
    expect(solve(12).firstStar).toEqual(3)
    expect(solve(23).firstStar).toEqual(2)
    expect(solve(1024).firstStar).toEqual(31)
    done()
  })
})
