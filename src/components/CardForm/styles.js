import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  text-align: center;
  font: italic normal bold 35px Arial;
  letter-spacing: 0px;
  color: #707070;
  margin-bottom: 25px;
`;

export const Card = styled.form`
  display: flex;
  flex-direction: column;
  width: 352px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 25px #00000014;
  border: 1px solid #dddddd;
  border-radius: 14px;
`;

export const InputsWrapper = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
    label {
      text-align: left;
      font: italic normal bold 17px Arial;
      margin-top: 34px;
      margin-left: 30px;
      letter-spacing: 0px;
      color: #9d9d9d;
    }

    input {
      flex: 1;
      border-bottom: 2px solid #ebebeb;
      color: #9d9d9d;
      padding-left: 20px;
    }
  }
`;

export const OptionalLink = styled.span`
  flex: 1;
  text-align: right;
  font: italic normal normal 17px Arial;
  letter-spacing: 0px;
  color: #c1c1c1;
  margin-top: 27px;
  margin-right: 27px;
  a {
    text-decoration: none;
    color: #c1c1c1;
  }
`;

export const SubmitButton = styled.button`
  flex: 1;
  text-align: center;
  font: italic normal bold 35px Arial;
  letter-spacing: 0px;
  color: #b5c401;
  background: none;
  margin-top: 44px;
  margin-bottom: 43px;
  svg {
    vertical-align: middle;
  }
  a {
    text-decoration: none;
    color: #b5c401;
  }
`;

export const LastButton = styled.span`
  flex: 1;
  text-align: center;
  font: italic normal bold 35px Arial;
  letter-spacing: 0px;
  color: #707070;
  margin-top: 30px;

  a {
    text-decoration: none;
    color: #707070;
  }
`;
