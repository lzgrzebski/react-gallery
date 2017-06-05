import React, { Component } from 'react';
import PropTypes from 'prop-types';

import constants from '../constants';
import imgRatioPadding from '../utils/imgRatioPadding';

import ImageWrapper from '../components/Image/ImageWrapper';
import Image from '../components/Image';
import Placeholder from '../components/Image/Placeholder';
import Reload from '../components/Image/Reload';

import ThumbLink from '../components/Thumb/ThumbLink';
import ThumbOverlay from '../components/Thumb/ThumbOverlay';

const padding = imgRatioPadding(constants.imgThumbSize);

/**
 * Logic related to single images
 * User can reload images which are not loaded properly
 */
class ImageContainer extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    isThumb: PropTypes.bool,
  }

  static defaultProps = {
    isThumb: false,
    handleClick: null,
  }

  state = {}

  fallback = () => {
    this.setState({ failed: true });
  }

  reload = () => {
    this.setState({ failed: false });
  }

  load = () => {
    this.setState({ loaded: true });
  }

  handleClick = (e) => {
    this.props.handleClick(this.props.id, true, e);
  }

  render = () => {
    if (this.state.failed) {
      return (
        <ImageWrapper padding={padding}>
          <Placeholder onClick={this.reload}>
            <Reload />
          </Placeholder>
        </ImageWrapper>
      );
    }

    const image = (
      <Image
        src={this.props.src}
        loaded={this.state.loaded}
        onLoad={this.load}
        onError={this.fallback}
      />
    );

    if (this.props.isThumb) {
      return (
        <ThumbLink onClick={this.handleClick}>
          <ImageWrapper padding={padding}>
            {image}
          </ImageWrapper>
          <ThumbOverlay />
        </ThumbLink>
      );
    }

    return (
      <ImageWrapper padding={padding}>
        {image}
      </ImageWrapper>
    );
  }
}

export default ImageContainer;
