import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CloseWrapper = styled.svg`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 1;

  width: 35px;
  height: 35px;
  cursor: pointer;

  fill: #777;
`;

const Close = (props) => {
  const handleClick = (e) => {
    props.handleClick(null, false, e);
  };
  return (
    <CloseWrapper onClick={handleClick}>
      <use xlinkHref="#close" />
    </CloseWrapper>
  );
};

Close.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Close;
