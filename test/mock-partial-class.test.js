import ProductService from "../src/product.service.js";
import ProductRepository from "../src/repositories/product.repository.js";

describe("Test Mock Partial Class: ", () => {
  const productRepository = new ProductRepository();
  const productService = new ProductService(productRepository);

  it("Should Be Failed Without Failing test and calling get() method", () => {
    expect(() => productService.get()).toThrow();
    expect(() => productService.get()).toThrow("Feature Not Implemented!");
  });

  it.failing("Should Be Failed Only With Get Method", () => {
    productService.get();
  });

  it("Should Be Succeded Only With Find Method", () => {
    jest.spyOn(productRepository, "find");

    productRepository.find.mockImplementation((id) => {
      if (!id) return null;
      const products = [{ id: 1, name: "Rujak" }, { id: 2, name: "Ketoprak" }, { id: 3, name: "Gado-Gado" }, { id: 4, name: "Jimmy" }];
      const product = products.find((product) => product.id === id);
      return !product ? null : product;
    });

    expect(productService.find(null)).toBeNull();
    expect(productService.find(3)).toEqual({ id: 3, name: "Gado-Gado" });
    expect(productService.find(5)).toBeNull();
    expect(productRepository.find).toHaveBeenCalled();
    expect(productRepository.find).toHaveBeenCalledTimes(3);
    expect(productRepository.find).toHaveBeenCalledWith(null);
    expect(productRepository.find).toHaveBeenCalledWith(3);
    expect(productRepository.find).toHaveBeenCalledWith(5);
  });
});
