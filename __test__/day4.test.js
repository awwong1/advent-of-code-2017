'use strict'
const { solve } = require('../src/day4')

describe('Day 4', () => {
  it('should pass description input (High-Entropy Passphrases)', async done => {
    expect(solve(`aa bb cc dd ee`).firstStar).toEqual(1)
    expect(solve(`aa bb cc dd aa`).firstStar).toEqual(0)
    expect(solve(`aa bb cc dd aaa`).firstStar).toEqual(1)
    done()
  })

  it('should pass description input (High-Entropy Passphrases 2)', async done => {
    expect(solve(`abcde fghij`).secondStar).toEqual(1)
    expect(solve(`abcde xyz ecdab`).secondStar).toEqual(0)
    expect(solve(`a ab abc abd abf abj`).secondStar).toEqual(1)
    expect(solve(`iiii oiii ooii oooi oooo`).secondStar).toEqual(1)
    expect(solve(`oiii ioii iioi iiio`).secondStar).toEqual(0)
    done()
  })
})
