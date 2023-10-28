test("Not Matcher", () => {
  const name = "Damenjo";

  expect(name).not.toBe("damenjo");
  expect(name).not.toEqual("damenjoo");
  expect(name).not.toMatch(/alvin/);
});

test("Not Matcher (Number)", () => {
  const val = 5;
  expect(val).not.toBeGreaterThan(5);
  expect(val).not.toBeGreaterThanOrEqual(6);
});