import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  top: 0;
  padding-top: 15px;
  padding-left: 141px;
  padding-right: 200px;
  height: 76px;
  width: 100vw;
  border-bottom: 2px solid #EBEBEB;
  justify-content: space-around;
`;

export const LogoAndHome = styled.div`
  display: flex;
`;

export const Logo = styled.div`
  text-align: center;
  font: italic normal bold 44px Arial;
  letter-spacing: 0px;
  color: #707070;
    hr {
    border: 4px solid #B5C401;
    border-radius: 6px;
    width: 106px;
    margin-top: 6px;
  }
`;

export const Home = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  font: italic normal bold 20px Arial;
  letter-spacing: 0px;
  margin-left: 74px;
  margin-top: 16px;
    a{
      color: #707070;
      text-decoration: none;
    }
`;

export const AccountAndLogout = styled.div`
  padding-top: 10px;
  span {
    text-align: center;
    font: italic normal bold 20px Arial;
    letter-spacing: 0px;
    color: #707070;
  }

  a {
    text-align: center;
    font: italic normal bold 20px Arial;
    letter-spacing: 0px;
    color: #707070;
    text-decoration: none;
    margin-left: 40px;

    svg {
      vertical-align: middle;
    }
  }
`;
