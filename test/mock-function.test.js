import { sumNumberLessThanN, sumNumberLessThanNV2 } from "../src/sum.js";

describe("Running Mock Function", () => {
  test("Sum Number Less Than N (1)", () => {
    const cb = jest.fn();
    sumNumberLessThanN([1, 2, 3], 5, cb);
    sumNumberLessThanN([4, 5, 1 ], 5, cb);
    expect(cb.mock.calls.length).toBe(2);
    expect(cb.mock.calls[0][0]).toBe(6);
    expect(cb.mock.calls[1][0]).toBe(5);
  });

  test("Sum Number Less Than N (2)", () => {
    const cb = jest.fn();
    cb.mockReturnValueOnce(25);
    expect(sumNumberLessThanNV2([1, 2], 3, cb)).toBe(25);
  });

  test("Sum Number Less Than N (3)", () => {
    const cb = jest.fn();
    cb.mockImplementation((result) => {
      return result + 100;
    });
    expect(sumNumberLessThanNV2([1, 2, 3, 4], 5, cb)).toBe(110);
  });
});