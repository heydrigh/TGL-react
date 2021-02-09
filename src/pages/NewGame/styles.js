import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  margin-top: 72px;
  align-items: center;
  justify-content: space-evenly;
  overflow-x: hidden;

  animation: ${appearFromLeft} 1s;

  ${media.lessThan('medium')`
    flex-direction: column;
    margin-top: 70px;
  `}
`;

export const GameHeader = styled.div`
  display: flex;
  text-align: left;
  text-transform: uppercase;
`;

export const NewBet = styled.h1`
  text-align: center;
  font: italic normal bold 24px Arial;
  letter-spacing: 0px;
  color: #707070;
  margin-right: 10px;
`;

export const GameName = styled.h1`
  text-align: center;
  font: italic normal 300 24px Arial;
  letter-spacing: 0px;
  color: #707070;
`;

export const ChoiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 33px;
`;

export const ChoiceHeader = styled.div`
  text-align: left;
  font: italic normal bold 17px Arial;
  letter-spacing: 0px;
  color: #868686;
`;

export const ChoicesButtons = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Lotofacil = styled.div`

`;

export const MegaSena = styled.div``;

export const LotoMania = styled.div``;

export const InstructionsWrapper = styled.div``;

export const InstructionsHeader = styled.div``;

export const Instructions = styled.div``;
