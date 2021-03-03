import React from 'react';
import * as S from './styles';

import CardForm from '../../components/CardForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Register = () => {
  const inputFields = [
    {
      label: 'Name',
      type: 'text',
      name: 'username'
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email'
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password'
    },
    {
      label: 'Password Confirmation',
      type: 'password',
      name: 'password_confirmation'
    }
  ];
  return (
    <>
      <S.Wrapper>
        <Header />
        <CardForm
          header="Registration"
          inputFields={inputFields}
          submitButtonText="Register"
          lastButtonLink="/"
          lastButtonText="Back"
          method="signUp"
        />
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default Register;
