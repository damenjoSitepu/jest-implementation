import ProductService from "../src/product.service.js";
import ProductRepository from "../src/repositories/product.repository.js";

jest.mock("../src/repositories/product.repository.js");
describe("Test Mock Class: ", () => {
  const productRepository = new ProductRepository();
  const productService = new ProductService(productRepository);

  it("Should Be Succeded With Find Method", () => {
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

  it("Should Be Succeded With Create Method", () => {
    const products = [
      {
        id: 1,
        name: "C++"
      },
      {
        id: 2,
        name: "Golang"
      },
    ];
    productRepository.get.mockReturnValueOnce(products);
    expect(productService.get()).toEqual(products);
    expect(productRepository.get).toHaveBeenCalled();
  });

  it("Should Be Succeded With Create Method", () => {
    const product = {
      id: 1,
      name: "Machine Learning",
    };
    productRepository.create.mockImplementation((product) => {
      return product;
    });
    expect(productService.create(product)).toEqual(product);
    expect(productRepository.create).toHaveBeenCalled();
    expect(productRepository.create).toHaveBeenCalledWith(product);
  });
});