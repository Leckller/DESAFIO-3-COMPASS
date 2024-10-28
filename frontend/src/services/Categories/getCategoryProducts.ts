import { IProduct } from '../../types/Product.Type';
import { ISort } from '../../types/Sort.Type';
import { BaseUrl } from '../URL';

export const getCategoryProductsByName = async (
  name: string,
  page: number = 0,
  show: number = 8,
  sort: ISort = 'default'
)
  : Promise<{ products: IProduct[], countProducts: number, categoryName: string }> => {
  const request = await fetch(`${BaseUrl}/category/type/${name}/${page}/${show}/${sort}`);
  const response = await request.json();
  return response;
};
