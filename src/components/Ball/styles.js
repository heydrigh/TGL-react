import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 65px;
  height: 65px;
  background: #adc0c4 0% 0% no-repeat padding-box;
  font: normal normal bold 20px Arial;
  letter-spacing: 0px;
  color: #ffffff;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.4, '#adc0c4')};
    cursor: pointer;
  }
`;
