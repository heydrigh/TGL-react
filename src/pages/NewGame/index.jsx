import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Menu from '../../components/Menu';
import LotteryButton from '../../components/LotteryButton';
import Ball from '../../components/Ball';
import Cart from '../../components/Cart';
import api from '../../services/api';
import { FiShoppingCart } from 'react-icons/fi';

const NewGame = () => {
  const [lotteryButtons, setLotteryButtons] = useState([]);
  const [selectableNumbers, setSelectableNumbers] = useState([]);
  const [selectedGame, setSelectedGame] = useState('Lotofácil');
  const [instruction, setInstruction] = useState(
    'Escolha 15 números para apostar na lotofácil. Você ganha acertando 11, 12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você joga de onde estiver!'
  );

  useEffect(() => {
    try {
      api.get('/types').then((response) => {
        setLotteryButtons(response.data);
      });
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  const handleSelectedGame = (gameRange, gameInstruction) => {
    let numbers = [];
    for (let i = 1; i <= gameRange; i++) {
      numbers.push(i);
    }
    setSelectableNumbers(numbers);
    handleInstructions(gameInstruction);
    console.log(numbers);
  };

  const handleInstructions = (gameInstructions) => {
    setInstruction(gameInstructions);
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
            <S.ChoicesButtons>
              {lotteryButtons &&
                lotteryButtons.map((lotteryButton) => (
                  <LotteryButton
                    clicked={() =>
                      handleSelectedGame(
                        lotteryButton.range,
                        lotteryButton.description
                      )
                    }
                    key={lotteryButton.type}
                    lotteryName={lotteryButton.type}
                    color={lotteryButton.color}
                  />
                ))}
            </S.ChoicesButtons>
          </S.ChoiceWrapper>
          <S.InstructionsWrapper>
            <S.InstructionsHeader>Fill your bet</S.InstructionsHeader>
            <S.Instructions>{instruction}</S.Instructions>
          </S.InstructionsWrapper>
          <S.NumbersWrapper>
            {selectableNumbers &&
              selectableNumbers.map((number) => (
                <Ball number={number} key={number} />
              ))}
          </S.NumbersWrapper>
          <S.ControlsWrapper>
            <S.CompleteAndClear>
              <button>Complete Game</button>
              <button>Clear Game</button>
            </S.CompleteAndClear>
            <S.CartControl>
              <button>
                <FiShoppingCart size={24} />
                Add to cart
              </button>
            </S.CartControl>
          </S.ControlsWrapper>
        </S.GamesWrapper>
        <Cart />
      </S.Wrapper>
    </>
  );
};

export default NewGame;
