import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Filter from '../components/Shop/Filter';
import Products from '../components/Home/Products/Products';
import Banner from '../components/Shop/Banner';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import Pages from '../components/Shop/Pages';
import { fetchCategoryProducts } from '../redux/Thunks/CategoryProductsThunk';
import { fetchProducts } from '../redux/Thunks/ProductsThunk';
import { StyledShopMain } from './Styles/Shop';

function Shop() {
  const { Product: { products } } = useAppSelector((s) => s);
  const dispatch = useAppDispatch();
  const { category } = useParams();

  useEffect(() => {
    if (category) {
      dispatch(fetchCategoryProducts({ category, page: 0, show: 8 }));
      return;
    } dispatch(fetchProducts({ page: 0, show: 8 }));
  }, []);

  return (
    <StyledShopMain>
      <Banner />
      <Filter />
      <Products
        products={
        products
        }
      />
      <Pages />
    </StyledShopMain>

  );
}

export default Shop;
