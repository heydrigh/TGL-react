import styled, { css } from 'styled-components';
import { shade } from 'polished';

const colors = {
  lotofacil: '#7F3992',
  megasena: '#01AC66',
  lotomania: '#F79C31'
}

export const Wrapper = styled.button`
  width: 113px;
  height: 34px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 2px solid ${colors.lotofacil};
  border-radius: 100px;
  text-align: center;
  font: italic normal bold 14px Arial;
  letter-spacing: 0px;
  color: ${colors.lotofacil};

  transition: background-color 0.2s;

  &:hover {
      background: ${shade(0.1, `${colors.lotofacil}` )};
      color: #FFFFFF;
    }

  ${props => props.lotteryName === 'lotofacil' && css `

  `}
`;
