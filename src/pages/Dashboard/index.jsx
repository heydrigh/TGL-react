import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Menu from '../../components/Menu';
import { BsArrowRight } from 'react-icons/bs';
import { Link, useHistory } from 'react-router-dom';
import LotteryButton from '../../components/LotteryButton';
import api from '../../services/api';
import { connect } from 'react-redux';

import * as lotteryActions from '../../store/modules/lotterys/actions/actions';
import * as betsActions from '../../store/modules/bets/actions/actions';

const Dashboard = (props) => {
  const [chosenGame, setChosenGame] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);
  const [games, setGames] = useState([]);
  const [noGameMessage, setNoGameMessage] = useState();
  const history = useHistory();

  useEffect(() => {
    if (!props.auth.isAuth) {
      history.push('/');
    }
    props.onFetchLottery();
    getBets();
  }, [history]);

  const getBets = async () => {
    try {
      const response = await api.get('/games');
      setGames(response.data);
      setNoGameMessage(
        'Você ainda não tem apostas. Clique em New Bet ecomece a jogar!'
      );
    } catch (err) {
      setNoGameMessage(
        'Ocorreu um erro ao buscar seus jogos, tente novamente mais tarde'
      );
    }
  };

  const handleFilter = (gameName) => {
    let gameInfos = [];

    Object.values(props.types).map((name) => {
      gameInfos.push(name.type);
    });

    setChosenGame(gameName);

    let filteredGame = Object.values(props.types).filter((game) => {
      return game.type === gameName;
    });

    if (games) {
      setFilteredGames(games.filter((game) => game.name === gameName));
    }

    console.log(filteredGame);
  };

  return (
    <>
      <Menu
        homeLink="/"
        accountText="Account"
        logOutText="Sair"
        accountLink="/account"
      />
      <S.Wrapper>
        <S.GamesHeader>
          <S.Recent>Recent Games</S.Recent>
          <S.FilterWrapper>
            <S.FilterSpan>Filters</S.FilterSpan>
            <S.FiltersContainer>
              {props.types &&
                Object.values(props.types).map((lotteryButton) => (
                  <LotteryButton
                    clicked={() => handleFilter(lotteryButton.type)}
                    key={lotteryButton.type}
                    lotteryName={lotteryButton.type}
                    color={lotteryButton.color}
                    active={lotteryButton.type === chosenGame}
                  />
                ))}
            </S.FiltersContainer>
          </S.FilterWrapper>
          <S.NewBet>
            <Link to="/newgame">
              New Bet <BsArrowRight size={36} />{' '}
            </Link>
          </S.NewBet>
        </S.GamesHeader>
        <S.GamesWrapper>
          {games.length > 0 && filteredGames.length === 0 ? (
            games.map((game) => (
              <S.Game key={game.id} color={game.color}>
                <hr />
                <S.GameDetails>
                  <S.GameNumbers>{game.numbers}</S.GameNumbers>
                  <S.DateAndCost>
                    {game.created_at} -{' '}
                    {game.price.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </S.DateAndCost>
                  <S.GameName color={game.color}>{game.name}</S.GameName>
                </S.GameDetails>
              </S.Game>
            ))
          ) : filteredGames.length > 0 ? (
            filteredGames.map((game) => (
              <S.Game key={game.id} color={game.color}>
                <hr />
                <S.GameDetails>
                  <S.GameNumbers>{game.numbers}</S.GameNumbers>
                  <S.DateAndCost>
                    {game.created_at} -{' '}
                    {game.price.toLocaleString('pt-br', {
                      style: 'currency',
                      currency: 'BRL'
                    })}
                  </S.DateAndCost>
                  <S.GameName color={game.color}>{game.name}</S.GameName>
                </S.GameDetails>
              </S.Game>
            ))
          ) : (
            <span>{noGameMessage}</span>
          )}
        </S.GamesWrapper>
      </S.Wrapper>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    types: state.types.lottery[0],
    bets: state.bets.bets[0],
    loading: state.types.loading,
    loadingBets: state.bets.loading,
    auth: state.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchLottery: () => dispatch(lotteryActions.fecthLottery()),
    onFetchBets: () => dispatch(betsActions.fecthBet())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
