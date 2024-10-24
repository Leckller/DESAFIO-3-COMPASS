import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { setPage } from '../../redux/Reducers/Filter';
import { fetchCategoryProducts } from '../../redux/Thunks/CategoryProductsThunk';
import { fetchProducts } from '../../redux/Thunks/ProductsThunk';
import { StyledButtonPages } from './Styles/Button';

function Button({ content, disabled, page, selected = false }
: { content: string, disabled: boolean, page: number, selected?: boolean }) {
  const dispatch = useAppDispatch();
  const { Filter: { show } } = useAppSelector((s) => s);

  const { category } = useParams();
  return (
    <StyledButtonPages
      disabled={ disabled }
      color={ selected ? '1' : '0' }
      onClick={ () => {
        dispatch(setPage(page));
        if (category) {
          dispatch(fetchCategoryProducts({ category, page, show }));
        } else {
          dispatch(fetchProducts({ page, show }));
        }
      } }
    >
      {content}
    </StyledButtonPages>
  );
}

export default Button;
