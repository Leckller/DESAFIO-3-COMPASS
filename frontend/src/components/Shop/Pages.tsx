import styled from 'styled-components';
import ITheme from '../../Utils/Themes';

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  gap: 16px;

  button {
    background-color: ${(p) => (p.theme as ITheme).Gold_md};
    border: none;
    padding: 16px;
    border-radius: 8px;
    min-width: 50px;
    min-height: 50px;
  }

`;

function Pages() {
  return (
    <StyledSection>
      <button>1</button>
      <button>Next</button>
    </StyledSection>
  );
}

export default Pages;
