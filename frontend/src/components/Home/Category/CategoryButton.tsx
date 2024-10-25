import { useNavigate } from 'react-router-dom';
import { ICategory } from '../../../types/Category.Type';
import { StyledCategoryButton } from './Styles/CategoryButton';

function CategoryButton({ category }: { category: ICategory }) {
  const navigate = useNavigate();

  return (
    <StyledCategoryButton onClick={ () => navigate(`home/shop/${category.name}/0`) }>

      <img src={ category.image.imageLink } alt="category" />
      <h3>{category.name}</h3>

    </StyledCategoryButton>

  );
}

export default CategoryButton;
