import styled, { keyframes } from 'styled-components';
import media from 'styled-media-query';
import { shade, lighten } from 'polished';

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
  justify-content: center;
  flex-direction: row;
  margin-top: 72px;
  align-items: center;
  overflow-x: hidden;

  animation: ${appearFromLeft} 1s;

  ${media.lessThan('medium')`
    margin-top: 70px;
    flex-direction: column;
  `}
`;

export const GamesWrapper = styled.div`
  width: 1080px;
  display: flex;
  align-self: center;
  flex-direction: column;

  ${media.lessThan('medium')`
    margin-bottom: 20px;
    margin-left: 400px;
    margin: auto;
    padding: 20px;
  `}
`;

export const GameHeader = styled.div`
  display: flex;
  text-align: left;
  text-transform: uppercase;

  ${media.lessThan('medium')`
    flex-direction: row;
    margin-bottom: 20px;
  `}
`;

export const NewBet = styled.h1`
  text-align: center;
  font: italic normal bold 24px Arial;
  letter-spacing: 0px;
  color: #707070;
  margin-right: 10px;

  ${media.lessThan('medium')`
    flex-direction: row;
  `}
`;

export const GameName = styled.h1`
  text-align: center;
  font: italic normal 300 24px Arial;
  letter-spacing: 0px;
  color: #707070;

  ${media.lessThan('medium')`
    flex-direction: row;
    margin-bottom: 20px;
  `}
`;

export const ChoiceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 33px;

  ${media.lessThan('medium')`
    flex-direction: row;
    margin-bottom: 20px;

  `}
`;

export const ChoiceHeader = styled.div`
  text-align: left;
  font: italic normal bold 17px Arial;
  letter-spacing: 0px;
  color: #868686;

  ${media.lessThan('medium')`
  text-align: center;
  `}
`;

export const ChoicesButtons = styled.div`
  display: flex;
  margin-top: 20px;

  ${media.lessThan('medium')`
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 20px;
  `}
`;

export const InstructionsWrapper = styled.div`
  margin-top: 37px;
`;

export const InstructionsHeader = styled.p`
  font: italic normal bold 17px Arial;
  letter-spacing: 0px;
`;

export const Instructions = styled.p`
  width: 65%;
  font: italic normal normal 17px Arial;
  letter-spacing: 0px;
`;

export const NumbersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 20px;
  margin-top: 25px;
  width: 60%;
  margin-bottom: 44px;

  ${media.lessThan('medium')`
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  width: 200px;
  `}
`;

export const ControlsWrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;

  ${media.lessThan('medium')`
  width: 400px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `}
`;

export const CompleteAndClear = styled.div`
  button {
    height: 52px;
    border: 1px solid #27c383;
    border-radius: 10px;
    font: normal normal medium 16px Arial;
    letter-spacing: 0px;
    color: #27c383;
    background: none;
    transition: background-color 0.4s;
    padding: 8px;

    &:hover {
      background-color: ${shade(0.2, '#27c383')};
      color: #fff;
    }

    & + button {
      margin-left: 25px;
    }
  }

  ${media.lessThan('medium')`
  margin-bottom: 10px;
  `}
`;

export const CartControl = styled.div`
  button {
    width: 209px;
    height: 52px;
    background: #27c383 0% 0% no-repeat padding-box;
    border: 1px solid #27c383;
    border-radius: 10px;
    font: normal normal bold 16px Arial;
    letter-spacing: 0px;
    color: #ffffff;
    transition: background-color 0.4s;

    &:hover {
      background-color: ${lighten(0.05, '#27c383')};
      color: #fff;
    }
  }

  svg {
    vertical-align: middle;
    margin-right: 28px;
    color: #fff;
  }
`;
