import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Article({ buttons }: { buttons: { img: string, route: string }[] }) {
  const navigate = useNavigate();

  const StyledArticle = styled.article`
    display: flex;
    justify-content: space-around;
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
