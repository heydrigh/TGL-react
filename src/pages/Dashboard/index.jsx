import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Menu from '../../components/Menu';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import LotteryButton from '../../components/LotteryButton';
import { connect } from 'react-redux';
import * as lotteryActions from '../../store/modules/lotterys/actions/actions';
import * as betsActions from '../../store/modules/bets/actions/actions';
import { ToastContainer } from 'react-toastify';

const Dashboard = (props) => {
  const [chosenGame, setChosenGame] = useState('');
  const [rules, setRules] = useState({});
  const [games, setGames] = useState([]);

  useEffect(() => {
    props.onFecthLottery();
    setGames(props.bets);
  }, []);

  const handleFilter = (gameName) => {
    let gameInfos = [];

    Object.values(props.types).map((name) => {
      gameInfos.push(name.type);
    });

    setChosenGame(gameName);

    let filteredGame = Object.values(props.types).filter((game) => {
      return game.type === gameName;
    });

    setRules(filteredGame[0]);
    console.log(games);
  };

  return (
    <>
      <Menu homeLink="/" accountText="Account" logOutText="Sair" />
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
          {games.length > 0 ? (
            games.map((game) => (
              <S.Game key={game.id} color={game.color}>
                <hr />
                <S.GameDetails>
                  <S.GameNumbers>
                    {game.selectedNumbers.sort().join()}
                  </S.GameNumbers>
                  <S.DateAndCost>
                    30/11/2020 - {game.price.toFixed(2)}
                  </S.DateAndCost>
                  <S.GameName color={game.color}>{game.type}</S.GameName>
                </S.GameDetails>
              </S.Game>
            ))
          ) : (
            <span>
              Você ainda não tem apostas. Clique em <strong>New Bet</strong> e
              comece a jogar!
            </span>
          )}
        </S.GamesWrapper>
      </S.Wrapper>
      <ToastContainer />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    types: state.types.lottery[0],
    bets: state.bets.bets,
    loading: state.types.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFecthLottery: () => dispatch(lotteryActions.fecthLottery()),
    onFetchBets: () => dispatch(betsActions.fetchBetSuccess())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
