import React from 'react';
import * as S from './styles';

import CardForm from '../../components/CardForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Home = () => {
  const inputFields = [
    {
      label: 'Email',
      type: 'text'
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
        header="Authentication"
        optionalLink="/resetpassword"
        optionalText="I forgot my password"
        inputFields={inputFields}
        submitButtonText="Log In"
        lastButtonLink="/register"
        lastButtonText="Sign Up"
        lastIconRight={true}
      />
      <Footer />
    </S.Wrapper>
  );
};

export default Home;
