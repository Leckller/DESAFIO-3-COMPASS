import styled from 'styled-components';

export const StyledArticle = styled.article`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
  padding: 16px;
  align-items: center;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
  width: 100%;
  height: 100%;
  }
`;
