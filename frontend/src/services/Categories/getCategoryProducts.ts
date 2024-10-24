import { IProduct } from '../../types/Product.Type';
import { BaseUrl } from '../URL';

export const getCategoryProductsByName = async (name: string, page: number = 0)
  : Promise<{ products: IProduct[], countProducts: number, categoryName: string }> => {
  const request = await fetch(`${BaseUrl}/category/type/${name}/${page}`);
  const response = await request.json();
  return response;
};
