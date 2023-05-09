import { IError } from '../custom';
import { ErrorCodes } from '../error-code';

export class ProductNotFoundError extends Error implements IError {
  code = ErrorCodes.ProductNotFound;
  constructor(id?: string) {
    super(`Peoduct ${id} not found`);
  }
}
