import React from 'react';
import * as S from './styles';

const LotteryButton = ({ lotteryName }) => {
  lotteryName = 'lotofacil';
  return <S.Wrapper value={lotteryName}>{lotteryName}</S.Wrapper>;
};

export default LotteryButton;
