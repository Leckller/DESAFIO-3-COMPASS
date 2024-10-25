import styled from 'styled-components';

export const StyledCategoryButton = styled.button`
  max-width: 300px;
  width: 100%;
  height: 520px;
  background-color: transparent;
  border: none;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  scroll-snap-align: center;

  img {
      object-fit: cover;
      width: 100%;
      height: 480px;
  }
`;
