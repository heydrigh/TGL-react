import React from 'react';
import * as S from './styles';
import CardForm from '../../components/CardForm';

const Account = () => {
  const inputFields = [
    {
      label: 'Nome',
      type: 'text'
    },
    {
      label: 'Email',
      type: 'email'
    },
    {
      label: 'Nova senha',
      type: 'password'
    },
    {
      label: 'Confirmar nova senha',
      type: 'password'
    }
  ];
  return (
    <S.Wrapper>
      <CardForm
        header="Account"
        inputFields={inputFields}
        submitButtonText="Register"
        lastButtonLink="/dashboard"
        lastButtonText="Back"
      />
    </S.Wrapper>
  );
};

export default Account;
