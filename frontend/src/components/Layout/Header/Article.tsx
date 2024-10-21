import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledArticle = styled.article`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;
`;

const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  `;

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
