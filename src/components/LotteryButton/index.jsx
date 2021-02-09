import React from 'react';
import * as S from './styles';

const LotteryButton = ({ lotteryName, color }) => {
  return (
    <S.Wrapper color={color} value={lotteryName}>
      {lotteryName}
    </S.Wrapper>
  );
};

export default LotteryButton;
