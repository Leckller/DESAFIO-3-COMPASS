import { categories } from '../services/Categories/categories';
import { categoryProductsByName } from '../services/Categories/categoryProducts';
import { productDetails } from '../services/Products/productDetails';
import { products } from '../services/Products/products';

function Home() {
  categoryProductsByName('dark').then((r) => console.log(r));
  categories().then((r) => console.log(r));
  products().then((r) => console.log(r));
  productDetails('sofa').then((r) => console.log(r));
  return (
    <>
      Home
    </>
  );
}

export default Home;
