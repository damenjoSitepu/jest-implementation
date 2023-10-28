import { countCharLength } from "../src/count.js";

test("Test to count char length", () => {
  const cCL = countCharLength("hai");
  expect(cCL).toBe(3);
});

test("Test to count char length (2)", () => {
  const cCL = countCharLength("");
  expect(cCL).toBe(0);
});

test("Test to count char length (3)", () => {
  const cCL = countCharLength("R");
  expect(cCL).toBe(1);
});