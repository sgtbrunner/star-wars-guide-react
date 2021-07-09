import React from 'react';
import PropTypes from 'prop-types';

import Card from '../Card';
import './cardlist.styles.css';

const CardList = ({ characters, openModal }) =>
  characters.length ? (
    <div className="cardlist">
      {characters.map((character) => {
        const { name, id } = character;
        return <Card name={name} index={id} key={id} openModal={openModal} />;
      })}
    </div>
  ) : (
    <div className="pa2 ma3 tc white-backdrop">
      <p1 className="alert-text animate-flicker">No characters found!</p1>
    </div>
  );

CardList.propTypes = {
  characters: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default CardList;
