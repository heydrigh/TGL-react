import React from 'react';
import * as S from './styles';

const LotteryButton = (props) => {
  return (
    <S.Wrapper
      onClick={props.clicked}
      color={props.color}
      value={props.lotteryName}
      active={props.active}
    >
      {props.lotteryName}
    </S.Wrapper>
  );
};

export default LotteryButton;
