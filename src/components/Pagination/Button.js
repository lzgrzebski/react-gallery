import styled from 'styled-components';

export default styled.button`

  display: inline-block;

  position: relative;
  height: 47px;
  padding: 0 26px;

  color: #fff;
  background-color: #ff5a5f;
  border: 3px solid #ff5a5f;

  text-align: center;
  text-decoration: none;
  cursor: pointer;
  vertical-align: bottom;
  white-space: nowrap;
  text-rendering: auto;
  user-select: none;
  outline: 0;
  box-sizing: border-box;
  border-radius: 999em;

  transition: .1s background-color,.1s border-color,.1s color,.1s fill;

  margin: 5px;

  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};

  &:hover {
    background-color: #ed595d;
    border-color: #ed595d;
  }

`;
