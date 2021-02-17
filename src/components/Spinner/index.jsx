import React from 'react';
import * as S from './styles';

const Spinner = () => {
  return (
    <S.Wrapper>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </S.Wrapper>
  );
};

export default Spinner;
