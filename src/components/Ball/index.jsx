import React from 'react';
import * as S from './styles';

const Ball = ({ number, clicked, isActive, disabled, color }) => {
  return (
    <S.Wrapper
      color={color}
      disabled={disabled}
      isActive={isActive}
      onClick={clicked}
    >
      <span>{number}</span>
    </S.Wrapper>
  );
};

export default Ball;
