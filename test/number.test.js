test("Number Matcher", () => {
  const value = 50;

  expect(value).toBeGreaterThan(49);
  expect(value).toBeGreaterThanOrEqual(50);
  expect(value).toBeLessThan(51);
  expect(value).toBeLessThanOrEqual(50);
  expect(value).toBe(50);
});