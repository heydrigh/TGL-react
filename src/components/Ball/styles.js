import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 65px;
  height: 65px;
  font: normal normal bold 20px Arial;
  letter-spacing: 0px;
  color: #ffffff;
  transition: cursor 0.2s;

  background: ${(props) => (props.isActive ? 'red' : '#adc0c4;')};

  /* &:hover {
    background: ${shade(0.4, '#adc0c4')};
    cursor: pointer;
  } */

  &:disabled {
    cursor: not-allowed;
    :hover {
      background-color: ${(props) => props.color && props.color};
    }
  }
`;
