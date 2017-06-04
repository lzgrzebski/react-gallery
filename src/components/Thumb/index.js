import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import ImageContainer from '../../containers/ImageContainer';

/**
 * Single thumbnail
 */
const Thumb = props => (
  <Wrapper>
    <ImageContainer {...props} />
  </Wrapper>
);

Thumb.propTypes = {
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Thumb;
