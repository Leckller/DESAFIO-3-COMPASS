import styled from 'styled-components';

export const StyledBanner = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  img {
    object-fit: cover;
    height: 300px;
  }

  article {
    position: absolute;
    backdrop-filter: blur(5px);
    background-color: #ffffff44;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
    h2 {
    }

  }
`;
