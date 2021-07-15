import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import CardList from '../components/Cardlist';
import Dialog from '../components/Dialog';
import Footer from '../components/Footer';
import { getStats, getFilms } from '../utils/functions.utils';
import './App.css';

const App = ({
  characters,
  loadCharacters,
  loadFilms,
  loadPlanets,
  loadSpecies,
  loadStarships,
  loadVehicles,
}) => {
  const isLoadingCharacters = !characters.length;
  const [searchField, setSearchField] = useState('');
  const [clickedCard, setClickedCard] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [characterDetails, setCharacterDetails] = useState({ race: {}, planet: {}, movies: '' });

  useEffect(() => {
    const fetchData = async () => {
      await loadCharacters();
      loadFilms();
      loadPlanets();
      loadSpecies();
      loadStarships();
      loadVehicles();
    };

    fetchData();
  }, [loadCharacters, loadFilms, loadPlanets, loadSpecies, loadStarships, loadVehicles]);

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

  return isLoadingCharacters ? (
    <div id="temp-page">
      <div className="page-loader animate-flicker">Please wait...</div>
    </div>
  ) : (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

App.propTypes = {
  characters: PropTypes.array.isRequired,
  loadCharacters: PropTypes.func.isRequired,
  loadFilms: PropTypes.func.isRequired,
  loadPlanets: PropTypes.func.isRequired,
  loadSpecies: PropTypes.func.isRequired,
  loadStarships: PropTypes.func.isRequired,
  loadVehicles: PropTypes.func.isRequired,
};

export default App;
