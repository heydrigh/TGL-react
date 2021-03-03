/* eslint-disable no-case-declarations */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import * as authActions from '../../store/modules/auth/actions';
import api from '../../services/api';

const CardForm = ({
  header,
  optionalLink,
  optionalText,
  submitButtonText,
  lastButtonText,
  lastButtonLink,
  inputFields,
  method,
  lastIconRight
}) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = async (data) => {
    switch (method) {
      case 'login':
        dispatch(authActions.authRequest(data.email, data.password));
        break;
      case 'signUp':
        const signInReponse = await api.post('/users', data);
        history.push('/');
        return signInReponse;

      case 'forgot':
        const forgotReponse = await api.post('/users', data);
        history.push('/');
        return forgotReponse;
      default:
        return;
    }
  };
  return (
    <S.Wrapper>
      <S.Header>{header}</S.Header>
      <S.Card onSubmit={handleSubmit(onSubmit)}>
        <S.InputsWrapper>
          {inputFields.map((input) => (
            <div key={input.label}>
              <label>{input.label}</label>
              <input name={input.name} ref={register} type={input.type} />
            </div>
          ))}
        </S.InputsWrapper>
        {optionalLink && (
          <S.OptionalLink>
            <Link to={optionalLink}>{optionalText} </Link>
          </S.OptionalLink>
        )}
        <S.SubmitButton type="submit">
          {submitButtonText} <AiOutlineArrowRight size={30} />
        </S.SubmitButton>
      </S.Card>
      {lastIconRight ? (
        <S.LastButton>
          <Link to={lastButtonLink}>
            {lastButtonText}
            <AiOutlineArrowRight size={30} />
          </Link>
        </S.LastButton>
      ) : (
        <S.LastButton>
          <Link to={lastButtonLink}>
            <AiOutlineArrowLeft size={30} />
            {lastButtonText}
          </Link>
        </S.LastButton>
      )}
    </S.Wrapper>
  );
};

export default CardForm;
