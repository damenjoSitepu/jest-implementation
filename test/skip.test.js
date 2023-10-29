import { sumOddValue } from "../src/sum.js";

test("Sum odd value", () => {
  expect(sumOddValue([2])).toBe(0);
});

test.skip("Sum odd value (2)", () => {
  expect(sumOddValue([4])).toBe(0);
});

it.skip("Sum odd value (3)", () => {
  expect(sumOddValue([5])).toBe(0);
});