import { useEffect } from 'react';
import styled from 'styled-components';
import CategoryButton from './CategoryButton';
import media from '../../../Utils/media';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchCategories } from '../../../redux/Thunks/CategoriesThunk';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  section {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
      gap: 16px;
      max-height: 600px;
  }

  ${media.md`
      section {
          height: 520px;
          flex-wrap: wrap;
          overflow: auto;
          scroll-snap-type: x mandatory;
          flex-direction: column;
          padding: 0 16px 0 16px;
      }    
  `}

`;
function Categories() {
  const { categories, loading } = useAppSelector((s) => s.Product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, []);

  return (
    <StyledSection>
      <section>
        {!loading && categories.map((cat) => (
          <CategoryButton category={ cat } key={ cat.image.id } />
        ))}
      </section>

    </StyledSection>
  );
}

export default Categories;
