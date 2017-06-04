import React from 'react';
import styled from 'styled-components';

const Reload = () => (
  <ReloadWrapper>
    <use xlinkHref="#reload" />
  </ReloadWrapper>
);

const ReloadWrapper = styled.svg`
  width: 35px;
  height: 35px;

  fill: #777;

  opacity: 0.25;
  transition: opacity 0.3s ease-in-out;
`;

export default Reload;
