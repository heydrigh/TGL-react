import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.footer`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 80px;
  border-top: 2px solid #EBEBEB;
  text-align: center;
  font: normal normal normal 15px Arial;
  letter-spacing: 0px;
  color: #707070;

  ${media.lessThan('medium')`
    display: none;
  `}
`;
