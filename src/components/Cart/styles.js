import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  border: 1px solid #e2e2e2;
  border-radius: 10px;
  background-color: #ffffff;
`;

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h4`
  font: italic normal bold 24px Arial;
  letter-spacing: 0px;
  color: #707070;
  text-transform: uppercase;
  margin-bottom: 35px;
  margin-top: 32px;
  margin-left: 19px;
`;

export const BetsWrapper = styled.div``;

export const Bet = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

export const DeleteButton = styled.button`
  background-color: #fff;
  margin-left: 17px;
  margin-right: 14px;
`;

export const BetDetails = styled.div`
  border-left: 4px solid #7f3992;
  border-radius: 8px;
  padding-left: 12px;
`;

export const BetNumbers = styled.p`
  font: italic normal bold 15px Arial;
  letter-spacing: 0px;
  color: #868686;
`;

export const NameAndPrice = styled.div`
  display: flex;
`;
export const LotteryName = styled.p`
  font: italic normal bold 16px Arial;
  letter-spacing: 0px;
  color: #7f3992;
  margin-right: 14px;
`;

export const LoteryPrice = styled.p`
  font: normal normal normal 16px Arial;
  letter-spacing: 0px;
  color: #868686;
`;

export const CartTotal = styled.span`
  margin-bottom: 47px;
  margin-left: 20px;
  font: 24px Arial;
  letter-spacing: 0px;
  color: #707070;
  letter-spacing: 0px;
  color: #707070;
  text-transform: uppercase;

  strong {
    font: italic normal bold 24px Arial;
  }
`;

export const SaveButton = styled.button`
  font: italic normal bold 35px Arial;
  letter-spacing: 0px;
  color: #27c383;
  background: #f4f4f4 0% 0% no-repeat padding-box;
  border: 1px solid #e2e2e2;
  height: 96px;

  svg {
    vertical-align: middle;
  }
`;
