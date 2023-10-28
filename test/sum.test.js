import { sum } from "../src/sum.js";

test("Sum Two Numbers", () => {
  const s = sum(1, 2);
  expect(s).toBe(3);
});