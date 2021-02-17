import React from 'react';
import * as S from './styles';

import { BsTrash, BsArrowRight } from 'react-icons/bs';

const Cart = ({ bets }) => {
  const totalPrice = bets.reduce((acc, bets) => acc + bets.price, 0);

  return (
    <>
      <S.Wrapper>
        <S.Cart>
          <S.Header>CART</S.Header>
          <S.BetsWrapper>
            {bets.length > 0 ? (
              bets.map((bet) => (
                <S.Bet key={bet.selectedNumbers}>
                  <S.DeleteButton>
                    <BsTrash size={26} />
                  </S.DeleteButton>
                  <S.BetDetails color={bet.color}>
                    <S.BetNumbers>{bet.selectedNumbers.join()}</S.BetNumbers>
                    <S.NameAndPrice>
                      <S.LotteryName color={bet.color}>
                        {bet.type}
                      </S.LotteryName>
                      <S.LoteryPrice>{bet.price.toFixed(2)}</S.LoteryPrice>
                    </S.NameAndPrice>
                  </S.BetDetails>
                </S.Bet>
              ))
            ) : (
              <span>Carrinho vazio. Faça uma aposta!</span>
            )}
          </S.BetsWrapper>

          <S.CartTotal>
            <strong>CART</strong> TOTAL: R$ {totalPrice.toFixed(2)}
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
