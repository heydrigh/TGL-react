import React from 'react';
import * as S from './styles';

import { BsTrash, BsArrowRight } from 'react-icons/bs';

const Cart = () => {
  return (
    <>
      <S.Wrapper>
        <S.Cart>
          <S.Header>CART</S.Header>
          <S.BetsWrapper>
            <S.Bet>
              <S.DeleteButton>
                <BsTrash size={26} />
              </S.DeleteButton>
              <S.BetDetails>
                <S.BetNumbers>
                  01, 02,04,05,06,07,09,15,17,20,21, 22,23,24,25
                </S.BetNumbers>
                <S.NameAndPrice>
                  <S.LotteryName>Lotofácil</S.LotteryName>
                  <S.LoteryPrice>R$ 2,50</S.LoteryPrice>
                </S.NameAndPrice>
              </S.BetDetails>
            </S.Bet>

            <S.Bet>
              <S.DeleteButton>
                <BsTrash size={26} />
              </S.DeleteButton>
              <S.BetDetails>
                <S.BetNumbers>
                  01, 02,04,05,06,07,09,15,17,20,21, 22,23,24,25
                </S.BetNumbers>
                <S.NameAndPrice>
                  <S.LotteryName>Lotofácil</S.LotteryName>
                  <S.LoteryPrice>R$ 2,50</S.LoteryPrice>
                </S.NameAndPrice>
              </S.BetDetails>
            </S.Bet>
          </S.BetsWrapper>

          <S.CartTotal>
            <strong>CART</strong> TOTAL: R$ 7,00
          </S.CartTotal>
        </S.Cart>
        <S.SaveButton>
          Save <BsArrowRight size={38} />
        </S.SaveButton>
      </S.Wrapper>
    </>
  );
};

export default Cart;
