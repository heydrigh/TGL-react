import React from 'react';
import * as S from './styles';

import CardForm from '../../components/CardForm';
import Header from '../../components/Header';

const Home = () => {
  return (
    <S.Wrapper>
      <Header />
      <CardForm />
    </S.Wrapper>
  );
};

export default Home;
