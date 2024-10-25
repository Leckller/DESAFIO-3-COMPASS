import { useNavigate } from 'react-router-dom';
import { StyledNotFoundMain } from './Styles/NotFound';

function NotFound() {
  const navigate = useNavigate();
  return (
    <StyledNotFoundMain>
      <p>
        Tudo vazio por aqui...
      </p>
      <button onClick={ () => navigate('/') }>
        <p>
          Voltar para rota principal
        </p>
      </button>
    </StyledNotFoundMain>
  );
}

export default NotFound;
