import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  text-align: center;
  font: italic normal bold 35px Helvetica Neue;
  letter-spacing: 0px;
  color: #707070;
  margin-bottom: 25px;
`;

export const Card = styled.form`
  display: flex;
  flex-direction: column;
  width: 352px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 25px #00000014;
  border: 1px solid #DDDDDD;
  border-radius: 14px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  label {
    text-align: left;
    font: italic normal bold 17px Helvetica Neue;
    margin-top: 34px;
  margin-left: 30px;
    letter-spacing: 0px;
    color: #9D9D9D;
  }

  input {
    flex: 1;
    border-bottom: 2px solid #EBEBEB;
  }
`;

export const OptionalLink = styled.span`
  flex: 1;
  text-align: right;
  font: italic normal normal 17px Helvetica Neue;
  letter-spacing: 0px;
  color: #C1C1C1;
  margin-top: 27px;
`;

export const SubmitButton = styled.button`
  flex: 1;
  text-align: center;
  font: italic normal bold 35px Helvetica Neue;
  letter-spacing: 0px;
  color: #B5C401;
  background: none;
  margin-top: 44px;
  margin-bottom: 43px;
`;

export const LastButton = styled.span`
  flex: 1;
  text-align: center;
  font: italic normal bold 35px Helvetica Neue;
  letter-spacing: 0px;
  color: #707070;
  margin-top: 30px;
`;

