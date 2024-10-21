import { ICategoryProduct } from '../../types/Category.Type';
import { BaseUrl } from '../URL';

export const getCategoryProductsByName = async (name: string)
: Promise<ICategoryProduct> => {
  const request = await fetch(`${BaseUrl}/category/type/${name}`);
  const response = await request.json();
  return response;
};
