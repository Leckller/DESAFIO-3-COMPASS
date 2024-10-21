import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../types/Category.Type';

function CategoryButton({ category }: { category: ICategory }) {
  const navigate = useNavigate();

  const StyledButton = styled.button`
    max-width: 300px;
    width: 100%;
    height: 520px;
    background-color: transparent;
    border: none;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    scroll-snap-align: center;

    img {
        object-fit: cover;
        width: 100%;
        height: 480px;
    }


  `;

  return (
    <StyledButton onClick={ () => navigate(`product/${category.name}`) }>

      <img src={ category.image.imageLink } alt="category" />
      <h3>{category.name}</h3>

    </StyledButton>

  );
}

export default CategoryButton;