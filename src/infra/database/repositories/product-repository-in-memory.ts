import { Product } from 'src/domain/entities/product';
import { IProductRepository } from 'src/domain/repositories/productRepository';

export class ProductRepositoryInMemory implements IProductRepository {
  private products: Product[];

  async save(product: Product) {
    this.products.push(product);
    return;
  }
}
