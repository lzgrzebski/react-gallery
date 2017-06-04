import styled from 'styled-components';

export default styled.span`
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;

  opacity: 0;
  background-color: rgba(255,255,255, 0.5);

  will-change: opacity, background-color;

  transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
`;
