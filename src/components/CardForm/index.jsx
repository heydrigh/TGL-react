import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

const CardForm = ({
  header,
  optionalLink,
  optionalText,
  submitButtonText,
  lastButtonText,
  lastButtonLink,
  inputFields,
  lastIconRight
}) => {
  return (
    <S.Wrapper>
      <S.Header>{header}</S.Header>
      <S.Card>
        <S.InputsWrapper>
          {inputFields.map((input) => (
            <div key={input.label}>
              <label>{input.label}</label>
              <input type={input.type} />
            </div>
          ))}
        </S.InputsWrapper>
        {optionalLink && (
          <S.OptionalLink>
            <Link to={optionalLink}>{optionalText} </Link>
          </S.OptionalLink>
        )}
        <S.SubmitButton>
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
