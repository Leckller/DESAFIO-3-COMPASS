import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ICategory } from '../../../types/Category.Type';
import CategoryButton from './CategoryButton';
import { getCategories } from '../../../services/Categories/getCategories';
import media from '../../../Utils/media';

function Categories() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getCategories().then((resp) => setCategories(resp));
  }, []);

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

export default Categories;
