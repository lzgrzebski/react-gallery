import styled from 'styled-components';

export default styled.a`
  display: block;
  position: relative;
  cursor: pointer;

  &:hover > span {
    opacity: 1;
  }
`;
