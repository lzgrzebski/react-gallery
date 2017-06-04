import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../components/Shared/Loader';

/**
 * Higher order component that allowsto show
 * loading spinner before main component is loaded
 */
export default (WrappedComponent) => {
  const LoaderHOC = props => (
    <div>
      { props.isLoading ? <Loader /> : <WrappedComponent {...props} /> }
    </div>
  );

  LoaderHOC.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };

  return LoaderHOC;
};
