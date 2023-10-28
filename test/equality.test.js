test("Test equality using string", () => {
  const product = "Product One";
  expect(product).toBe("Product One");
});

test("Test equality using deep object", () => {
  const product = {
    id: 1,
  };
  Object.assign(product, { name: "Jambu" });
  expect(product).toEqual({ id: 1, name: "Jambu" });
});