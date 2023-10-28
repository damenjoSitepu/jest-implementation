import { sayHi } from "../src/hello";
import { CustomException } from "../src/utils/exceptions/custom-exception.js";

test("Exception Matcher", () => {
  expect(() => sayHi("Damenjo")).toThrow();
  expect(() => sayHi("Damenjo")).toThrow(CustomException);
  expect(() => sayHi("Damenjo")).toThrow("Custom error occured!");
});