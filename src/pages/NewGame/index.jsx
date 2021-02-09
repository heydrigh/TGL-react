import React from 'react';
import * as S from './styles';
import Menu from '../../components/Menu';
import LotteryButton from '../../components/LotteryButton';

const NewGame = () => {
  return (
    <>
      <Menu homeText="Home" accountText="Account" logOutText="Log out" />
      <S.Wrapper>
        <S.GameHeader>
          <S.NewBet>New bet</S.NewBet>
          <S.GameName>For Mega-Sena</S.GameName>
        </S.GameHeader>
        <S.ChoiceWrapper>
          <S.ChoiceHeader>Choose a game</S.ChoiceHeader>
          <S.ChoicesButtons>
            <LotteryButton />
          </S.ChoicesButtons>
        </S.ChoiceWrapper>
        <S.InstructionsWrapper>
          <S.InstructionsHeader>Fill your bet</S.InstructionsHeader>
          <S.Instructions>
            Mark as many numbers as you want up to a maximum of 50. Win by
            hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn.
          </S.Instructions>
        </S.InstructionsWrapper>
      </S.Wrapper>
    </>
  );
};

export default NewGame;
