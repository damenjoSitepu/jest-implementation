test("String Matcher", () => {
  const myName = "Damenjo Sitepu";
  expect(myName).toBe("Damenjo Sitepu");
  expect(myName).toMatch(/jo/);
});