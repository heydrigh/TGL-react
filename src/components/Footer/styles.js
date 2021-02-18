import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #707070;
  border-top: 2px solid #ebebeb;
  border-bottom: 2px solid #ebebeb;
  font-size: 15px;

  ${media.lessThan('medium')`
    display: none;
  `}
`;
