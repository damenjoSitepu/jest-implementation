import { sumOddValue, sum } from "../src/sum.js";

const sumTwoValueTable = [
  [
    2,
    4,
    6,
  ],
  [
    8,
    9,
    17,
  ],
];

const sumOddValueTable = [
  [
    [2, 4, 6],
    0,
  ],
  [
    [3, 4, 6,11],
    14,
  ],
];

describe("Should Sum Odd Value", () => {
  it.each(sumOddValueTable)("Base on %s within result: %i", (numbers, sumTarget) => {
    expect(sumOddValue(numbers)).toBe(sumTarget);
  }); 
});

describe("Should Sum Two Numbers", () => {
  test.each(sumTwoValueTable)("Base on %i plus %i within result: %i", (numA, numB, sumTarget) => {
    expect(sum(numA, numB)).toBe(sumTarget);
  });
});

