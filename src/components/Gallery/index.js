import React from 'react';
import PropTypes from 'prop-types';

import constants from '../../constants';
import imgUrl from '../../utils/imgUrl';
import Loader from '../../hoc/Loader';

import Wrapper from './Wrapper';
import Thumb from '../Thumb';

/**
 * Main gallery grid
 */
const Gallery = ({ images, handleClick }) => (
  <Wrapper>
    {
      Object.values(images).map(image => (
        <Thumb
          key={image.id}
          id={image.id}
          src={imgUrl(image, constants.imgThumbSize)}
          handleClick={handleClick}
          isThumb
        />
      ))
    }
  </Wrapper>
);

Gallery.propTypes = {
  images: PropTypes.objectOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Loader(Gallery);
