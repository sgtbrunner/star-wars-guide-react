import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2 ma3 br3 custom-box">
      <input
        className="f4 pa2 w-100 ba bw1 custom-field"
        type="search"
        placeholder="find your favorite Star Wars character..."
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
