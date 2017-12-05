'use strict'
const { solve } = require('../src/day5')

describe('Day 4', () => {
  it('should pass description input (Twisty Trampolines)', async done => {
    expect(solve(`0
    3
    0
    1
    -3`).firstStar).toEqual(5)
    done()
  })

  it('should pass description input (Twisty Trampolines 2)', async done => {
    expect(solve(`0
    3
    0
    1
    -3`).secondStar).toEqual(10)
    done()
  })
})
