import styled from 'styled-components';
import { ICategory } from '../../types/Category.Type';

function CategoryButton({ category }: { category: ICategory }) {
  const StyledButton = styled.button`
    max-width: 300px;
    width: 100%;
    height: 520px;
    background-color: transparent;
    border: none;
    border-radius: 8px;
    overflow: hidden;

    img {
        object-fit: cover;
        width: 100%;
        height: 480px;
    }

  `;

  console.log(category);

  return (
    <StyledButton>

      <img src={ category.image.imageLink } alt="category" />
      <h3>{category.name}</h3>

    </StyledButton>

  );
}

export default CategoryButton;
