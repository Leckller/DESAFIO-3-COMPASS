import styled from 'styled-components';

export const StyledProductMain = styled.main`
  section:nth-child(2) {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 64px;
  }

  section:nth-child(4) {
    display: flex;
    flex-direction: column;
    margin-top: 64px;
    gap: 16px;
    align-items: center;
    justify-content: center;
  }
`;
