import { BaseUrl } from '../URL';

export const getProductDetails = async (id: number) => {
  const request = await fetch(`${BaseUrl}/product/id/${id}`);
  const response = await request.json();
  return response;
};
