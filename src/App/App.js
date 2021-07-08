import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Modal from '../components/Modal';
import Footer from '../components/Footer';
import { getCharacters } from '../redux/characters/characters.actions';
import { createList, getStats, getFilms } from '../utils/functions.utils';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [clickedCard, setClickedCard] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [characterDetails, setCharacterDetails] = useState({ race: '', planet: '', movies: '' });

  useEffect(() => {
    createList().then((response) => setCharacters(response));
  }, []);

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
      race: '',
      planet: '',
      movies: '',
    });
    setClickedCard('');
    setShowModal(false);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchField.toLowerCase())
  );

  if (!characters.length) {
    return (
      <div id="temp-page">
        <div className="page-loader animate-flicker">Please wait...</div>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div id="flex-container">
        <SearchBox searchChange={onSearchChange} />
        <CardList
          characters={characters}
          filteredCharacters={filteredCharacters}
          openModal={openModal}
        />
        ''
        <Modal
          showModal={showModal}
          character={clickedCard}
          race={characterDetails.race}
          planet={characterDetails.planet}
          movies={characterDetails.movies}
          onCloseClick={onCloseClick}
        />
      </div>
      <Footer />
    </div>
  );
};

const maptDispatchToProps = (dispatch) => ({
  getCharacters: () => dispatch(getCharacters()),
});

const mapStateToProps = (state) => ({
  characters: state.characters.characters,
});

export default connect(mapStateToProps, maptDispatchToProps)(App);
