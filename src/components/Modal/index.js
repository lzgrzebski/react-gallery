import React from 'react';
import PropTypes from 'prop-types';
import constants from '../../constants';
import imgUrl from '../../utils/imgUrl';

import ImageWrapper from './ImageWrapper';
import ImageContainer from '../../containers/ImageContainer';
import Wrapper from './Wrapper';
import Author from './Author';
import Close from './Close';

/**
 * Modal component for displaying fullsize images
 */
const Modal = ({ visible, handleClick, image }) => (
  <Wrapper visible={visible}>
    <Close handleClick={handleClick} />
    <ImageWrapper>
      <ImageContainer
        id={image.id}
        src={imgUrl(image, constants.imgFullSize)}
      />
      <Author>@{image.author}</Author>
    </ImageWrapper>
  </Wrapper>
);

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;
