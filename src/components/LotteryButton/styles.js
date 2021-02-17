import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.button`
  width: 113px;
  height: 34px;
  background: #ffffff 0% 0% no-repeat padding-box;
  margin-right: 25px;
  border-radius: 100px;
  text-align: center;
  font: italic normal bold 14px Arial;
  letter-spacing: 0px;

  transition: background-color 0.2s;

  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
      border: 2px solid ${props.color};
      &:hover {
        background: ${shade(0.1, `${props.color}`)};
        color: #ffffff;
      }
    `}

  ${(props) =>
    props.active &&
    css`
      color: ${props.color};
      background: ${shade(0.1, `${props.color}`)};
      color: #ffffff;
    `}
`;
