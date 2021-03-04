import React, { useEffect } from 'react';
import * as S from './styles';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import api from '../../services/api';

const Account = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const auth = useSelector((state) => {
    return {
      isAuth: state.auth.isAuth,
      user: state.auth.user
    };
  });

  useEffect(() => {
    if (!auth.isAuth) {
      history.push('/');
    }
  }, [auth.isAuth, history]);

  const onSubmit = async (data) => {
    try {
      const response = await api.put('/users', data);
      console.log(response);
      toast.success('Suas alterações foram salvas');
      history.push('/dashboard');
    } catch (err) {
      console.log(err);
      toast.error('Falha em modificar seus dados, tente novamente mais tarde');
    }
  };

  return (
    <S.Wrapper>
      <S.Header>Account</S.Header>
      <S.Card onSubmit={handleSubmit(onSubmit)}>
        <S.InputsWrapper>
          <label>Nome</label>
          <input
            name="username"
            ref={register({ required: true })}
            type="text"
            placeholder={auth.user.username}
          />

          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder={auth.user.email}
            disabled
          />

          <label>Senha</label>
          <input
            name="password"
            ref={register({ required: true })}
            type="password"
          />

          <label>Confirmação de senha</label>
          <input
            name="password_confirmation"
            ref={register({ required: true })}
            type="password"
          />
        </S.InputsWrapper>

        <S.SubmitButton type="submit">
          Modify <AiOutlineArrowRight size={30} />
        </S.SubmitButton>
      </S.Card>

      <S.LastButton>
        <Link to="/dashboard">
          <AiOutlineArrowLeft size={30} />
          Back
        </Link>
      </S.LastButton>
    </S.Wrapper>
  );
};

export default Account;
