import styled from 'styled-components';
import ITheme from '../../../Utils/Themes';

export const StyledPresentation = styled.section`
  width: 100%;
  height: 100%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  img {
      object-fit: cover;
      height: 400px;
  }

  article {
      position: absolute;
      right: 100px;
      bottom: 0;
      width: 40%;
      padding: 20px;
      min-height: 100px;
      min-width: 200px;
      background-color: ${(props) => (props.theme as ITheme).Gold_md};

  }
`;
