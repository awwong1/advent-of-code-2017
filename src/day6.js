'use strict'

function solve (input) {
  let inputArr = input.split('\t').map(val => +val)
  let combinations = new Set()
  let firstStar = 0
  let secondStar = 0
  let stepTracker = {}
  while (!combinations.has(inputArr.join(','))) {
    // console.log(inputArr.join(','), firstStar)
    stepTracker[inputArr.join(',')] = firstStar
    // get index of highest number
    combinations.add(inputArr.join(','))
    let index = inputArr.indexOf(inputArr.reduce((a, b) => { return Math.max(a, b) }))
    let iVal = inputArr[index]
    inputArr[index] = 0
    while (iVal) {
      index = (index + 1) % inputArr.length
      inputArr[index] += 1
      iVal -= 1
    }
    firstStar += 1
  }
  secondStar = firstStar - stepTracker[inputArr.join(',')]

  return { firstStar, secondStar }
}

// console.log(solve(`0\t2\t7\t0`))
// const input = `4	10	4	1	8	4	9	14	5	1	14	15	0	15	3	5`
// console.log(solve(input))

module.exports = { solve }
