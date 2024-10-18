type Image = {
  id: number;
  imageLink: string;
};

export interface ICategory {
  id: number;
  name: string;
  image: Image;
}
