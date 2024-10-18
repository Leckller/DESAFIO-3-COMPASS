import { BaseUrl } from '../URL';

export const categoryProductsByName = async (name: string) => {
  const request = await fetch(`${BaseUrl}/category/type/${name}`);
  const response = await request.json();
  return response;
};
