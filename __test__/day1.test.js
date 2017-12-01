"use strict";
const { inverseCaptcha, inverseCaptchaHalf } = require("../src/day1");

describe("Day 1", () => {
  it("should pass description input (inverseCaptcha)", async done => {
    expect(inverseCaptcha('1122')).toBe(3);
    expect(inverseCaptcha('1111')).toBe(4);
    expect(inverseCaptcha('1234')).toBe(0);
    expect(inverseCaptcha('91212129')).toBe(9);
    done();
  });

  it("should pass description input (inverseCaptchaHalf)", async done => {
    expect(inverseCaptchaHalf('1212')).toBe(6);
    expect(inverseCaptchaHalf('1221')).toBe(0);
    expect(inverseCaptchaHalf('123425')).toBe(4);
    expect(inverseCaptchaHalf('123123')).toBe(12);
    expect(inverseCaptchaHalf('12131415')).toBe(4);
    done();    
  })
});
