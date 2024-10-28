import { useNavigate } from 'react-router-dom';
import { StyledLogo } from './Styles/Logo';
import LogoImg from '../../../Assets/Header/Logo.svg'

function Logo() {
  const navigate = useNavigate();
  return (

    <StyledLogo onClick={() => navigate('/')}>
      <img src={LogoImg} alt="furniro" />
      <h1>
        Furniro
      </h1>
    </StyledLogo>

  );
}

export default Logo;
