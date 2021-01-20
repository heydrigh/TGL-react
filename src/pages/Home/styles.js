import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 154px;
  align-items: center;
  justify-content: space-evenly;

  ${media.lessThan('medium')`
    flex-direction: column;
    margin-top: 70px;
  `}
`;

