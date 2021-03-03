import React from 'react';
import * as S from './styles';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BsTrash, BsArrowRight } from 'react-icons/bs';
import api from '../../services/api';

const Cart = ({ bets, deleted }) => {
  const totalPrice = bets.reduce((acc, bets) => acc + bets.price, 0);
  const history = useHistory();

  const handleSavedButton = async () => {
    let game_array = [];
    if (bets.length > 0) {
      bets.map((bet) => {
        const game = {
          type_id: bet.id,
          numbers: bet.selectedNumbers.join(',')
        };
        game_array.push(game);
      });
      console.log(game_array);
      const response = await api.post('/games', game_array);
      toast.success('Seu jogos foras salvos com sucesso!');
      console.log(response);
      history.push('/dashboard');
    } else {
      toastWarn('Seu carrinho está vazio. Por favor faça ao menos uma aposta.');
    }
  };

  const toastWarn = (message) => {
    toast.warn(message, {
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
      <S.Wrapper>
        <S.Cart>
          <S.Header>CART</S.Header>
          <S.BetsWrapper>
            {bets.length > 0 ? (
              bets.map((bet) => (
                <S.Bet key={bet.id}>
                  <S.DeleteButton onClick={() => deleted(bet.id)}>
                    <BsTrash size={26} />
                  </S.DeleteButton>
                  <S.BetDetails color={bet.color}>
                    <S.BetNumbers>{bet.selectedNumbers.join()}</S.BetNumbers>
                    <S.NameAndPrice>
                      <S.LotteryName color={bet.color}>
                        {bet.type}
                      </S.LotteryName>
                      <S.LoteryPrice>R$ {bet.price.toFixed(2)}</S.LoteryPrice>
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
        <S.SaveButton onClick={handleSavedButton}>
          Save <BsArrowRight size={38} />
        </S.SaveButton>
      </S.Wrapper>
    </>
  );
};

export default Cart;
