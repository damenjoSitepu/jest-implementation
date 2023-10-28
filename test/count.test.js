import { countCharLength } from "../src/count.js";

test("Test to count char length", () => {
  const cCL = countCharLength("hai");
  expect(cCL).toBe(3);
});