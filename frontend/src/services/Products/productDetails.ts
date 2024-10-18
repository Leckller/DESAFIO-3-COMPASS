import { BaseUrl } from '../URL';

export const productDetails = async (name: string) => {
  const request = await fetch(`${BaseUrl}/product/details/${name}`);
  const response = await request.json();
  return response;
};
