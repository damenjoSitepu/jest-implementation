import { sumOddValue } from "../src/sum.js";

describe("Sum Operation", () => {
  it("Should be sum odd value only", () => {
    expect(sumOddValue([])).toBe(0);
    expect(sumOddValue()).toBe(0);
    expect(sumOddValue([1, 3, 4])).toBe(4);
    expect(sumOddValue([2,2])).toBe(0);
  });
});