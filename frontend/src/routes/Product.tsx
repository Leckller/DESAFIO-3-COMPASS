import styled from 'styled-components';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActPage from '../components/Product/ActPage';
import { useAppDispatch } from '../hooks/reduxHooks';
import { fetchProductsDetails } from '../redux/Thunks/ProductDetailsThunk';
import Images from '../components/Product/Images';
import Description from '../components/Product/Description';

const StyledMain = styled.main``;

function Product() {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductsDetails(+id!));
  }, []);

  return (
    <StyledMain>
      <ActPage />
      <section>
        <Images />
        <Description />
      </section>
    </StyledMain>

  );
}

export default Product;
