import React, { useEffect } from 'react';
import * as S from './styles';
import CardForm from '../../components/CardForm';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Account = () => {
  const history = useHistory();
  const auth = useSelector((state) => {
    return {
      isAuth: state.auth.isAuth
    };
  });

  useEffect(() => {
    if (!auth.isAuth) {
      history.push('/');
    }
  }, [auth.isAuth, history]);
  const inputFields = [
    {
      label: 'Nome',
      type: 'text',
      name: 'username'
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email'
    },
    {
      label: 'Nova senha',
      type: 'password',
      name: 'password'
    },
    {
      label: 'Confirmar nova senha',
      type: 'password',
      name: 'password_confirmation'
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
