'use strict'
const { solve } = require('../src/day6')

describe('Day 6', () => {
  it('should pass description input ()', async done => {
    expect(solve(`0\t2\t7\t0`).firstStar).toEqual(5)
    expect(solve(`0\t2\t7\t0`).secondStar).toEqual(4)
    done()
  })
})
