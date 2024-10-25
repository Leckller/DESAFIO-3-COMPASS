import styled from 'styled-components';

export const StyledBubbleInfo = styled.article`
  background-color: ${(prop) => prop.theme[prop.color!]} !important;
  position: absolute;
  border-radius: 100%;
  height: 50px !important;
  width: 50px !important;
  right: 5%;
  top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white !important;
`;
