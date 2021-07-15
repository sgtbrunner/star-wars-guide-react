import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CardList from '../../Cardlist';
import Dialog from '../../Dialog';
import SearchBox from '../../SearchBox';
import { getStats, getFilms } from '../../../utils/functions.utils';
import './main.styles.css';

const Main = ({ characters }) => {
  const [searchField, setSearchField] = useState('');
  const [clickedCard, setClickedCard] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [characterDetails, setCharacterDetails] = useState({ race: {}, planet: {}, movies: '' });
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const openModal = async (event) => {
    setShowModal(true);
    setClickedCard(characters[event.target.id]);
    const race = await getStats(characters[event.target.id].species);
    const planet = await getStats(characters[event.target.id].homeworld);
    const movies = await getFilms(characters[event.target.id].films);
    setCharacterDetails({
      race,
      planet,
      movies,
    });
  };

  const onCloseClick = () => {
    setCharacterDetails({
      race: {},
      planet: {},
      movies: '',
    });
    setClickedCard({});
    setShowModal(false);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div id="main">
      <SearchBox searchChange={onSearchChange} />
      <CardList characters={filteredCharacters} openModal={openModal} />
      ''
      {showModal && (
        <Dialog
          character={clickedCard}
          race={characterDetails.race}
          planet={characterDetails.planet}
          movies={characterDetails.movies}
          onCloseClick={onCloseClick}
        />
      )}
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
