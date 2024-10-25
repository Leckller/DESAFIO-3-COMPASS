import { useEffect } from 'react';
import CategoryButton from './CategoryButton';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchCategories } from '../../../redux/Thunks/CategoriesThunk';
import { StyledCategories } from './Styles/Categories';

function Categories() {
  const { categories, loading } = useAppSelector((s) => s.Product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, []);

  return (
    <StyledCategories>
      <section>
        {!loading && categories.map((cat) => (
          <CategoryButton category={ cat } key={ cat.image.id } />
        ))}
      </section>

    </StyledCategories>
  );
}

export default Categories;
