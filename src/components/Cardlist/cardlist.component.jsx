import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import './cardlist.styles.css';

const CardList = ({ characters }) =>
  characters.length ? (
    <div className="cardlist">
      {characters.map((character) => (
        <Card name={character.name} index={character.id} key={character.id} />
      ))}
    </div>
  ) : (
    <div className="pa2 ma3 tc white-backdrop" role="alert">
      <p className="alert-text animate-flicker">No characters found!</p>
    </div>
  );

CardList.propTypes = {
  characters: PropTypes.array.isRequired,
};

export default CardList;
