import { sum } from "../src/sum.js";

beforeAll(() => console.info("(Outer) - Before All"));
afterAll(() => console.info("(Outer) - After All"));

describe("Groupping (1)", () => {
  beforeAll(() => console.info("(Inner 1) - Before All"));
  beforeEach(() => console.info("(Inner 1) - Before Each"));
  afterEach(() => console.info("(Inner 1) - After Each"));
  afterAll(() => console.info("(Inner 1) - After All"));
  test("Test Inner", () => {
    console.log("Run Test Inner");
    expect(sum(50, 50)).toBe(100);
  });
  // You can do nested groupping as much as you want
});

describe("Groupping (2)", () => {
  beforeEach(() => console.info("(Inner 2) - Before Each 2"));
  afterEach(() => console.info("(Inner 2) - After Each 2"));
  test("Test Inner", () => {
    console.log("Run Test Inner 2");
    expect(sum(120, 120)).not.toBe(241);
  });
});
