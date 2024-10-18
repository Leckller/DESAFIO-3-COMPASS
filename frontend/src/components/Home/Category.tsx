import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ICategory } from '../../types/Category.Type';
import CategoryButton from './CategoryButton';
import { getCategories } from '../../services/Categories/getCategories';

function Category() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getCategories().then((resp) => setCategories(resp));
  }, []);

  const StyledSection = styled.section`
    display: flex;
    flex-direction: column;

    section {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        gap: 16px;
    }

  `;

  return (
    <StyledSection>
      <h2>Browse The Range</h2>

      <section>
        {categories.reverse().slice(0, 3).map((cat) => (
          <CategoryButton category={ cat } key={ cat.image.id } />
        ))}
      </section>

    </StyledSection>
  );
}

export default Category;
