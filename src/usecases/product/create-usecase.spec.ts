import { Test } from '@nestjs/testing';
import {
  ProductRepositoryToken,
  IProductRepository,
} from '../../domain/repositories/productRepository';
import { UseCaseCreateProduct } from './create-usecase';
import { ProductRepositoryInMemory } from '../../infra/database/repositories/product-repository-in-memory';

describe('CreateProductUseCase', () => {
  let createProductUseCase: UseCaseCreateProduct;
  let fakeRepository: IProductRepository;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        UseCaseCreateProduct,
        {
          provide: ProductRepositoryToken,
          useClass: ProductRepositoryInMemory,
        },
      ],
    }).compile();

    createProductUseCase =
      moduleRef.get<UseCaseCreateProduct>(UseCaseCreateProduct);
    fakeRepository = moduleRef.get<IProductRepository>(ProductRepositoryToken);
  });

  it('should create product', async () => {
    createProductUseCase.execute({
      name: 'Test',
      description: 'Test description',
      price: 4000,
    });

    const result = await fakeRepository.listAll();

    expect(result.length).toBe(1);
    expect(result[0]).toHaveProperty('id');
  });
});
