import { sumOddValue } from "../src/sum.js";

test("Sum odd value (1)", () => {
  expect(sumOddValue([5, 6])).toBe(5);
});

test.only("Sum odd value (2)", () => {
  expect(sumOddValue([5, 6,8,7])).toBe(12);
});

test("Sum odd value (3)", () => {
  expect(sumOddValue([5, 6])).toBe(5);
});