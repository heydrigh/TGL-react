import React from 'react';
import * as S from './styles';

import CardForm from '../../components/CardForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Register = () => {
  const inputFields = [
    {
      label: 'Name',
      type: 'text'
    },
    {
      label: 'Email',
      type: 'email'
    },
    {
      label: 'Password',
      type: 'password'
    }
  ];
  return (
    <S.Wrapper>
      <Header />
      <CardForm
        header="Registration"
        inputFields={inputFields}
        submitButtonText="Register"
        lastButtonLink="/"
        lastButtonText="Back"
      />
      <Footer />
    </S.Wrapper>
  );
};

export default Register;
