import { sayHi } from "../src/hello";

test("Fullfil code coverage up to 90%", () => {
  expect(sayHi("Sitepu")).toBe("Sitepu");
  expect(() => sayHi()).toThrow("Custom error occured!");
});