import { sayHi } from "../src/hello.js";
import { CustomException } from "../src/utils/exceptions/custom-exception.js";

describe("To prove that failing function works", () => {
  it("Name: Another, will returns 'Another'", () => {
    expect(sayHi("Another")).toBe("Another");
  });

  it("Name: Damenjo also will returns error", () => {
    expect(() => sayHi()).toThrow();
    expect(() => sayHi()).toThrow("Custom error occured!");
    expect(() => sayHi()).toThrow(CustomException);
  });

  it.failing("sayHi function facing an error cause 'damenjo' parameter has been called", () => {
    sayHi("Damenjo");
  });
});