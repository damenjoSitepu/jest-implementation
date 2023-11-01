import { ProductRepository } from "./repositories/product.repository.js";

export default class ProductService {
  constructor(productRepository) {
    if (productRepository) {
      this.productRepository = productRepository;
    } else {
      this.productRepository = new ProductRepository();
    }
  }

  get() {
    return this.productRepository.get();
  }

  find(id = null) {
    return this.productRepository.find(id);
  }

  create(product) {
    return this.productRepository.create(product);
  }
}