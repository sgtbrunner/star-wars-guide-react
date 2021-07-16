import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CardList from '../../Cardlist';
import SearchBox from '../../SearchBox';
import './main.styles.css';

const Main = ({ characters }) => {
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div id="main">
      <SearchBox searchChange={onSearchChange} />
      <CardList characters={filteredCharacters} />
    </div>
  );
};

Main.propTypes = {
  characters: PropTypes.array,
};

Main.defaultProps = {
  characters: [],
};

export default Main;
