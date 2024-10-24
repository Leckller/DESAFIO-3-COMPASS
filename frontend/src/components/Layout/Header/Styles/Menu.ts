import styled from 'styled-components';
import media from '../../../../Utils/media';

export const StyledMenuBtn = styled.button`
visibility: hidden;
display: none;
justify-content: center;
align-items: center;
position: absolute;
border: none;
background-color: transparent;
position: relative;
width: 30px;
height: 30px;
margin-right: 8px;

${media.md`
  position: static;
  visibility: visible;
  display: flex;
`};

.bar {
  position: absolute;
  width: 20px;
  height: 5px;
  background-color: #333;
  transform-origin: center;
  animation: ${(p) => (p.color ? 'uncross 1s forwards' : 'cross 1s forwards')};
}

.bar:nth-child(2) {
  transform: rotate(90deg);
  transform: translateY(32px);
  animation: ${(p) => (p.color ? 'uncross-2 1s forwards' : 'cross-2 1s forwards')};
}

@keyframes cross {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes cross-2 {
  0% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(0deg) translateY(8px);
  }
}

@keyframes uncross-2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-45deg);
  }
}

@keyframes uncross {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(45deg);
  }
}
`;
