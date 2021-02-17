import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Menu = ({ homeText, homeLink, accountText, logOutText }) => {
  return (
    <S.Wrapper>
      <S.LogoAndHome>
        <S.Logo>
          TGL <hr />
        </S.Logo>
        <S.Home>
          <Link to={homeLink}>{homeText}</Link>
        </S.Home>
      </S.LogoAndHome>
      <S.AccountAndLogout>
        <span>{accountText}</span>
        <Link to="/">
          {logOutText}
          <AiOutlineArrowRight size={30} />
        </Link>
      </S.AccountAndLogout>
    </S.Wrapper>
  );
};

export default Menu;
