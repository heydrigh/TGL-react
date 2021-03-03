import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as S from './styles';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import * as authActions from '../../store/modules/auth/actions/actions';

const Menu = ({ homeText, homeLink, accountText, accountLink, logOutText }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    dispatch(authActions.logout());
    history.push('/');
  };

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
        <Link to={accountLink}>{accountText}</Link>
        <S.LogoutButton onClick={handleLogOut}>
          {logOutText}
          <AiOutlineArrowRight size={30} />
        </S.LogoutButton>
      </S.AccountAndLogout>
    </S.Wrapper>
  );
};

export default Menu;
