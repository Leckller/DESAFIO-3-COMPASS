type ImageDetail = {
  id: number;
  imageLink: string;
};

type Image = {
  id: number;
  image: ImageDetail;
};

export type IProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  discount_percent: number;
  create_date: string;
  images: Image[];
};

export type IProductCart = { product: IProduct, quantity: number };
