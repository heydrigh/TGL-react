import styled, { keyframes } from 'styled-components';

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
  width: 70%;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 390px;
  margin-top: 75px;
  animation: ${appearFromLeft} 1s;
`;

export const GamesHeader = styled.div`
  display: flex;
`;

export const Recent = styled.h4`
  font: italic normal bold 24px Arial;
  letter-spacing: 0px;
  color: #707070;
  text-transform: uppercase;
`;

export const FilterWrapper = styled.div`
  display: flex;
  margin-left: 46px;
`;
export const FilterSpan = styled.span`
  font: italic normal normal 17px Arial;
  letter-spacing: 0px;
  padding-top: 4px;
  color: #868686;
`;

export const FiltersContainer = styled.div`
  margin-left: 16px;
`;

export const NewBet = styled.div`
  font: italic normal bold 24px Arial;
  letter-spacing: 0px;

  margin-left: 200px;
  a {
    color: #b5c401;
    text-decoration: none;
  }
  svg {
    vertical-align: middle;
  }
`;

export const GamesWrapper = styled.div`
  margin-top: 38px;
  span {
    font: normal normal normal 20px Arial;
    letter-spacing: 0px;
    color: #868686;
  }
`;

export const Game = styled.div`
  display: flex;
  margin-bottom: 30px;
  hr {
    border: 3px solid ${(props) => props.color && props.color};
    border-radius: 10px;
    margin-right: 15px;
  }
`;

export const GameDetails = styled.div``;

export const GameNumbers = styled.div`
  font: italic normal bold 20px Arial;
  letter-spacing: 0px;
  color: #868686;
  margin-bottom: 15px;
`;

export const DateAndCost = styled.div`
  font: normal normal normal 17px Arial;
  letter-spacing: 0px;
  color: #868686;
  margin-bottom: 11px;
`;

export const GameName = styled.div`
  font: italic normal bold 20px Arial;
  letter-spacing: 0px;
  color: ${(props) => props.color && props.color};
`;
