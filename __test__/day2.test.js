"use strict";
const {
  corruptionChecksum, corruptionChecksumEvens
} = require("../src/day2");

describe("Day 2", () => {
  it("should pass description input (corruptionChecksum)", async done => {
    expect(corruptionChecksum(`5 1 9 5
      7 5 3
      2 4 6 8`)).toEqual(18);
    done();
  });
  it("should pass description input (corruptionChecksumEvens)", async done => {
    expect(corruptionChecksumEvens(`5 9 2 8
      9 4 7 3
      3 8 6 5`)).toEqual(9);
    done();
  });
});
