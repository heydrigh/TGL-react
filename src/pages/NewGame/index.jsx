import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as S from './styles';
import Menu from '../../components/Menu';
import LotteryButton from '../../components/LotteryButton';
import Ball from '../../components/Ball';
import Cart from '../../components/Cart';
import * as actions from '../../store/modules/lotterys/actions/actions';
import Spinner from '../../components/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiShoppingCart } from 'react-icons/fi';

const NewGame = (props) => {
  const [selectableNumbers, setSelectableNumbers] = useState([]);
  const [isActive, setIsActive] = useState([]);
  const [chosenGame, setChosenGame] = useState('');
  const [rules, setRules] = useState({});
  const [cartsGames, setCartGames] = useState([]);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [instruction, setInstruction] = useState(
    'Escolha uma loteria para começar!'
  );

  useEffect(() => {
    props.onFecthLottery();
  }, []);

  const handleSelectedGame = (gameRange, gameInstruction, gameName) => {
    let numbers = [];
    let gameInfos = [];
    for (let i = 1; i <= gameRange; i++) {
      numbers.push(i);
    }
    setSelectableNumbers(numbers);
    handleInstructions(gameInstruction);
    Object.values(props.types).map((name) => {
      gameInfos.push(name.type);
    });

    setChosenGame(gameName);

    let filteredGame = Object.values(props.types).filter((game) => {
      return game.type === gameName;
    });

    setRules(filteredGame[0]);
  };

  const handleInstructions = (gameInstructions) => {
    setInstruction(gameInstructions);
  };

  const handleBallClick = (number) => {
    const numbers = [...selectedNumbers];
    const actives = isActive;
    numbers.push(number);
    setSelectedNumbers(numbers);
    actives[number - 1] = !actives[number - 1];
    setIsActive(actives);
    console.log(numbers);
  };

  const completeGameHandler = () => {
    let numbers = [];
    let randomNumber;
    const actives = isActive;
    if (!chosenGame) {
      toast.error('Escolha um jogo');
      return;
    }
    if (selectedNumbers.length === rules.max_number) {
      toast.error('Número maximo de números ja escolhido');
    } else {
      while (numbers.length !== rules.max_number) {
        do {
          randomNumber = Math.floor(Math.random() * (rules.range - 1 + 1)) + 1;
        } while (numbers.some((num) => num === randomNumber));
        numbers.push(randomNumber);
        actives[randomNumber - 1] = !actives[randomNumber - 1];
        setIsActive(actives);
        setSelectedNumbers(numbers);
      }
    }
  };

  const addToCartHandler = () => {
    if (selectedNumbers.length === rules.max_number) {
      const gameDone = { ...rules, selectedNumbers };
      gameDone.selectedNumbers.map(String);
      setCartGames([...cartsGames, gameDone]);
      clearGameHandler();
      toastSuccess();
    } else {
      toastWarn(rules.max_number);
    }
  };

  const clearGameHandler = () => {
    const numbers = [];
    setSelectedNumbers([]);
    for (let i = 0; i < 80; i++) {
      numbers.push(false);
    }
    setIsActive(numbers);
  };

  const toastWarn = (maxNumber) => {
    toast.warn(`Por favor, escolha ${maxNumber} números para seu jogo`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  const toastSuccess = () => {
    toast.success('Jogo adicionado ao carrinho!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };

  return (
    <>
      <Menu homeText="Home" accountText="Account" logOutText="Log out" />
      <S.Wrapper>
        <S.GamesWrapper>
          <S.GameHeader>
            <S.NewBet>New bet</S.NewBet>
            <S.GameName>For Mega-Sena</S.GameName>
          </S.GameHeader>
          <S.ChoiceWrapper>
            <S.ChoiceHeader>Choose a game</S.ChoiceHeader>
            {props.loading ? (
              <Spinner />
            ) : (
              <S.ChoicesButtons>
                {props.types &&
                  Object.values(props.types).map((lotteryButton) => (
                    <LotteryButton
                      clicked={() =>
                        handleSelectedGame(
                          lotteryButton.range,
                          lotteryButton.description,
                          lotteryButton.type
                        )
                      }
                      key={lotteryButton.type}
                      lotteryName={lotteryButton.type}
                      color={lotteryButton.color}
                      active={lotteryButton.type === chosenGame}
                    />
                  ))}
              </S.ChoicesButtons>
            )}
          </S.ChoiceWrapper>
          <S.InstructionsWrapper>
            <S.InstructionsHeader>Fill your bet</S.InstructionsHeader>
            <S.Instructions>{instruction}</S.Instructions>
          </S.InstructionsWrapper>
          <S.NumbersWrapper>
            {selectableNumbers &&
              selectableNumbers.map((number) => (
                <Ball
                  isActive={isActive[number - 1]}
                  disabled={isActive[number - 1]}
                  clicked={() => handleBallClick(number)}
                  number={number}
                  key={number}
                  color={rules.color}
                />
              ))}
          </S.NumbersWrapper>
          <S.ControlsWrapper>
            <S.CompleteAndClear>
              <button onClick={completeGameHandler}>Complete Game</button>
              <button onClick={clearGameHandler}>Clear Game</button>
            </S.CompleteAndClear>
            <S.CartControl>
              <button onClick={addToCartHandler}>
                <FiShoppingCart size={24} />
                Add to cart
              </button>
            </S.CartControl>
          </S.ControlsWrapper>
        </S.GamesWrapper>
        <Cart bets={cartsGames} />
      </S.Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    types: state.types.lottery[0],
    loading: state.types.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFecthLottery: () => dispatch(actions.fecthLottery())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewGame);
