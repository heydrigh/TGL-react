import React from 'react';
import * as S from './styles';

const CardForm = () => {
  return (
    <S.Wrapper>
      <S.Header>Authentication</S.Header>
      <S.Card>
        <S.InputsWrapper>
          <label>Email</label>
          <input type="email" />

          <label>Password</label>
          <input type="password" />
        </S.InputsWrapper>
        <S.OptionalLink>I forgot my password</S.OptionalLink>
        <S.SubmitButton>Log In</S.SubmitButton>
      </S.Card>
      <S.LastButton>Sign Up</S.LastButton>
    </S.Wrapper>
  );
};

export default CardForm;
