test("Test Truthiness", () => {
  const value = undefined;
  expect(value).toBeUndefined();
  expect(value).toBeFalsy();
  
  const nullValue = null;
  expect(nullValue).toBeFalsy();
  expect(nullValue).toBeNull();
  expect(nullValue).toBeDefined();

  const damenjo = "damenjo";
  expect(damenjo).toBeTruthy();
});