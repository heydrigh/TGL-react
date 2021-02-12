import React from 'react';
import * as S from './styles';
import Menu from '../../components/Menu';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import LotteryButton from '../../components/LotteryButton';

const Dashboard = () => {
  return (
    <>
      <Menu accountText="Account" logOutText="Sair" />
      <S.Wrapper>
        <S.GamesHeader>
          <S.Recent>Recent Games</S.Recent>
          <S.FilterWrapper>
            <S.FilterSpan>Filters</S.FilterSpan>
            <S.FiltersContainer>
              <LotteryButton lotteryName="Lotofácil" color="#7F3992" />
              <LotteryButton lotteryName="Lotofácil" color="#7F3992" />
              <LotteryButton lotteryName="Lotofácil" color="#7F3992" />
            </S.FiltersContainer>
          </S.FilterWrapper>
          <S.NewBet>
            <Link to="/newgame">
              New Bet <BsArrowRight size={36} />{' '}
            </Link>
          </S.NewBet>
        </S.GamesHeader>
        <S.GamesWrapper>
          <S.Game>
            <hr />
            <S.GameDetails>
              <S.GameNumbers>
                01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25
              </S.GameNumbers>
              <S.DateAndCost>30/11/2020 - (R$ 2,50)</S.DateAndCost>
              <S.GameName>Lotofácil</S.GameName>
            </S.GameDetails>
          </S.Game>

          <S.Game>
            <hr />
            <S.GameDetails>
              <S.GameNumbers>
                01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25
              </S.GameNumbers>
              <S.DateAndCost>30/11/2020 - (R$ 2,50)</S.DateAndCost>
              <S.GameName>Lotofácil</S.GameName>
            </S.GameDetails>
          </S.Game>

          <S.Game>
            <hr />
            <S.GameDetails>
              <S.GameNumbers>
                01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25
              </S.GameNumbers>
              <S.DateAndCost>30/11/2020 - (R$ 2,50)</S.DateAndCost>
              <S.GameName>Lotofácil</S.GameName>
            </S.GameDetails>
          </S.Game>
        </S.GamesWrapper>
      </S.Wrapper>
    </>
  );
};

export default Dashboard;
