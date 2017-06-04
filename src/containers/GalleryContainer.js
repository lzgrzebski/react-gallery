import React, { Component } from 'react';

import api from '../services/api';

import Gallery from '../components/Gallery';
import Pagination from '../components/Pagination';
import Modal from '../components/Modal';

/**
 * GalleryContainer contains all the state logic of the app
 */
class GalleryContainer extends Component {

  state = {
    images: {},
    page: 0,
    isModalOpen: false,
    currentImage: null,
  }

  componentWillMount = () => {
    this.setPage();
  }

  setPage = async (currentPage = 0) => {
    if (this.state.images[currentPage]) {
      this.setState({ page: currentPage });
      return;
    }

    const { images, lastPage, page } = await api(currentPage);
    this.setState({
      images: {
        ...this.state.images,
        ...images,
      },
      lastPage,
      page,
    });
  }

  getCurrentImage = () => this.state.images[this.state.page][this.state.currentImage];

  navigate = (position) => {
    window.scrollTo(0, 0);
    this.setPage(position);
  }

  handleClick = (currentImage, isModalOpen, e) => {
    e.preventDefault();

    this.setState({
      currentImage,
      isModalOpen,
    });
  }

  render = () => {
    const images = this.state.images;
    return (
      <div>
        <Gallery
          images={images[this.state.page]}
          isLoading={!images[this.state.page]}
          handleClick={this.handleClick}
        />

        <Pagination
          isPrevEnabled={this.state.page > 0}
          isNextEnabled={this.state.lastPage !== this.state.page}
          prev={() => this.navigate(this.state.page - 1)}
          next={() => this.navigate(this.state.page + 1)}
        />

        {this.state.isModalOpen && (
          <Modal
            visible={this.state.isModalOpen}
            handleClick={this.handleClick}
            image={this.getCurrentImage()}
          />
        )}
      </div>
    );
  }
}

export default GalleryContainer;
