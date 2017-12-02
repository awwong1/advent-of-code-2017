'use strict'

function inverseCaptcha (inputNumber) {
  const digitArray = [...(inputNumber + '')].map(v => +v)
  let sum = 0
  for (let i = 0; i < digitArray.length; i++) {
    if (digitArray[i] === digitArray[(i + 1) % digitArray.length]) {
      sum += digitArray[i]
    }
  }
  return sum
}

function inverseCaptchaHalf (inputNumber) {
  const digitArray = [...(inputNumber + '')].map(v => +v)
  let sum = 0
  for (let i = 0; i < digitArray.length; i++) {
    if (
      digitArray[i] ===
      digitArray[(i + digitArray.length / 2) % digitArray.length]
    ) {
      sum += digitArray[i]
    }
  }
  return sum
}

module.exports = { inverseCaptcha, inverseCaptchaHalf }
