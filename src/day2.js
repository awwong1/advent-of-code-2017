'use strict'

function corruptionChecksum (inputMatrix) {
  let sum = 0
  const rows = inputMatrix.split('\n')
  rows.map(row => {
    const cols = row.trim().replace(/\t/g, ' ').split(' ').map(cell => +cell)
    const diff = Math.max(...cols) - Math.min(...cols)
    sum += diff
  })
  return sum
}

function corruptionChecksumEvens (inputMatrix) {
  let sum = 0
  const rows = inputMatrix.split('\n')
  rows.map(row => {
    const cols = row.trim().replace(/\t/g, ' ').split(' ').map(cell => +cell).sort((a, b) => a - b)
    for (let i = 0; i < cols.length; i++) {
      for (let j = i; j < cols.length; j++) {
        if (j === i) continue
        if (cols[j] % cols[i] === 0) {
          sum += (cols[j] / cols[i])
          break
        }
      }
    }
  })
  return sum
}

module.exports = {
  corruptionChecksum, corruptionChecksumEvens
}
