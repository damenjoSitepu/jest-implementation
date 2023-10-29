import { sumOddValue, sum } from "../src/sum.js";

const sumTwoValueTable = [
  {
    numA: 2,
    numB: 4,
    sumTarget: 6,
  },
  {
    numA: 8,
    numB: 9,
    sumTarget: 17,
  },
];

const sumOddValueTable = [
  {
    numbers: [2, 4, 6],
    sumTarget: 0,
  },
  {
    numbers: [3, 4, 6,11],
    sumTarget: 14,
  },
];

describe("Should Sum Odd Value", () => {
  it.each(sumOddValueTable)("Base on $numbers within result: $sumTarget", ({ numbers, sumTarget }) => {
    expect(sumOddValue(numbers)).toBe(sumTarget);
  }); 
});

describe("Should Sum Two Numbers", () => {
  test.each(sumTwoValueTable)("Base on $numA plus $numB within result: $sumTarget", ({ numA, numB, sumTarget }) => {
    expect(sum(numA, numB)).toBe(sumTarget);
  });
});

