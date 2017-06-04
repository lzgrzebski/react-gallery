import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Button from './Button';

/**
 * Pagination component to navigate through images
 */
const Pagination = ({ isPrevEnabled, isNextEnabled, prev, next }) => (
  <Wrapper>
    <Button visible={isPrevEnabled} onClick={prev}>&larr; Prev</Button>
    <Button visible={isNextEnabled} onClick={next}>Next &rarr;</Button>
  </Wrapper>
);

Pagination.propTypes = {
  isPrevEnabled: PropTypes.bool.isRequired,
  isNextEnabled: PropTypes.bool.isRequired,
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default Pagination;
