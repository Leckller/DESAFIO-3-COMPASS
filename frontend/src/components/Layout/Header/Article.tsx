import { useNavigate } from 'react-router-dom';
import { StyledArticle, StyledButton } from './Styles/Article';

function Article({ buttons }: { buttons: { img: string, route: string }[] }) {
  const navigate = useNavigate();

  return (
    <StyledArticle>

      {buttons.map((btn) => (

        <StyledButton
          key={ btn.route }
          onClick={ () => navigate(btn.route) }
        >
          <img src={ btn.img } alt={ btn.route } />
        </StyledButton>

      ))}

    </StyledArticle>
  );
}

export default Article;
