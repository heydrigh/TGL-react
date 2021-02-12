import React from 'react';
import * as S from './styles';

const Ball = ({ number, clicked, isActive, disabled }) => {
  return (
    <S.Wrapper disabled={disabled} isActive={isActive} onClick={clicked}>
      <span>{number}</span>
    </S.Wrapper>
  );
};

export default Ball;
