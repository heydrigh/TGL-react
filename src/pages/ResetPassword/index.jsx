import React from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import CardForm from '../../components/CardForm';
import Footer from '../../components/Footer';

const ResetPassword = () => {
  const inputFields = [
    {
      label: 'Email',
      type: 'text',
      name: 'email'
    }
  ];

  return (
    <>
      <S.Wrapper>
        <Header />
        <CardForm
          header="Reset password"
          inputFields={inputFields}
          submitButtonText="Send link"
          lastButtonLink="/"
          lastButtonText="Back"
          methor="forgot"
        />
      </S.Wrapper>
      <Footer />
    </>
  );
};

export default ResetPassword;
