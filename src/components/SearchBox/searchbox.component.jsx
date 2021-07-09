import React from 'react';
import PropTypes from 'prop-types';

import './searchbox.styles.css';

const SearchBox = ({ searchChange }) => (
  <div className="pa2 br3 searchbox">
    <input
      className="f4 pa2 w-100 ba bw1 custom-field"
      type="search"
      placeholder="find your favorite Star Wars character..."
      onChange={searchChange}
    />
  </div>
);

SearchBox.propTypes = {
  searchChange: PropTypes.func.isRequired,
};

export default SearchBox;
