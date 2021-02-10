import React from 'react';
import * as S from './styles';

const Ball = ({ number }) => {
  return (
    <S.Wrapper>
      <span>{number}</span>
    </S.Wrapper>
  );
};

export default Ball;
