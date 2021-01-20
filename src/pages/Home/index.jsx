import React from 'react';
import * as S from './styles';

import CardForm from '../../components/CardForm';
import Header from '../../components/Header';

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
        optionalLink="#"
        optionalText="I forgot my password"
        inputFields={inputFields}
        submitButtonText="Log In"
        lastButtonLink="#"
        lastButtonText="Sign Up"
        lastIconRight={true}
      />
    </S.Wrapper>
  );
};

export default Home;
