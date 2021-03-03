import React, { useEffect } from 'react';
import * as S from './styles';
import CardForm from '../../components/CardForm';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

const Home = () => {
  const history = useHistory();
  const auth = useSelector((state) => {
    return {
      isAuth: state.auth.isAuth,
      error: state.auth.error
    };
  });

  useEffect(() => {
    if (auth.isAuth) {
      history.push('/dashboard');
    }

    if (auth.error) {
      console.log('aqyu');
      toast.error(
        'Algo deu errado ao fazer login, verifique seu email e senha.'
      );
    }
  }, [auth.isAuth, history, auth]);
  const inputFields = [
    {
      label: 'Email',
      type: 'text',
      name: 'email'
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password'
    }
  ];

  return (
    <>
      <S.Wrapper>
        <Header />
        <CardForm
          header="Authentication"
          optionalLink="/resetpassword"
          optionalText="I forgot my password"
          inputFields={inputFields}
          submitButtonText="Log In"
          submitButtonLink="/dashboard"
          lastButtonLink="/register"
          lastButtonText="Sign Up"
          lastIconRight={true}
          method="login"
        />
      </S.Wrapper>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Home;
