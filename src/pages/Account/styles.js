import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 154px;
  align-items: center;
  justify-content: space-evenly;
  overflow-x: hidden;

  animation: ${appearFromRight} 1s;

  ${media.lessThan('medium')`
    flex-direction: column;
    margin-top: 70px;
  `}
`;
