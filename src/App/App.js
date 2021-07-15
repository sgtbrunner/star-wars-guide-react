import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Footer from '../components/Blocks/Footer';
import Header from '../components/Blocks/Header';
import Main from '../components/Blocks/Main';
import Loader from '../components/Loader';
import './App.css';

const App = ({
  isCharactersLoading,
  loadCharacters,
  loadFilms,
  loadPlanets,
  loadSpecies,
  loadStarships,
  loadVehicles,
}) => {
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

  return isCharactersLoading ? (
    <Loader />
  ) : (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

App.propTypes = {
  isCharactersLoading: PropTypes.bool.isRequired,
  loadCharacters: PropTypes.func.isRequired,
  loadFilms: PropTypes.func.isRequired,
  loadPlanets: PropTypes.func.isRequired,
  loadSpecies: PropTypes.func.isRequired,
  loadStarships: PropTypes.func.isRequired,
  loadVehicles: PropTypes.func.isRequired,
};

export default App;
