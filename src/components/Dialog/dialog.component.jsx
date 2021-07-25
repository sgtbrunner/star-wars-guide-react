import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { getImageUrl, capitalizeFirstLetter } from '../../utils/functions.utils';
import './dialog.styles.css';

const deserializeStatsList = (list, type) =>
  list.map((item) => type[item - 1]?.name || type[item - 1]?.title).join(', ');

const Dialog = ({
  characterId,
  characters,
  films,
  planets,
  species,
  isDialogDataLoaded,
  closeDialog,
}) => {
  const character = characters[characterId];
  const DIALOG_STATS = isDialogDataLoaded && [
    {
      name: 'Species',
      value: deserializeStatsList(character.species, species) || 'Human',
    },
    { name: 'Gender', value: capitalizeFirstLetter(character.gender) },
    { name: 'Birth Year', value: character.birth_year },
    { name: 'Height', value: character.height, unit: 'cm' },
    { name: 'Weight', value: character.mass, unit: 'Kg' },
    { name: 'Homeworld', value: planets[character.homeworld - 1].name },
    { name: 'Films', value: deserializeStatsList(character.films, films) },
  ];

  useEffect(() => {
    const events = ['click', 'keydown'];
    const closeOnEvent = (event) => {
      if (event.keyCode === 27 || event.target.id === 'overlay') closeDialog();
    };

    events.forEach((event) => window.addEventListener(event, closeOnEvent));
    return () => events.forEach((event) => window.removeEventListener(event, closeOnEvent));
  }, [closeDialog]);

  return (
    <div className="overlay" id="overlay" role="dialog">
      {!isDialogDataLoaded ? (
        <div className="dialog-load" role="alert">
          <div className="dialog-loader" />
        </div>
      ) : (
        <div className="dialog-content">
          <span className="close">
            <button type="button" className="bn pointer bg-transparent" onClick={closeDialog}>
              &times;
            </button>
          </span>
          <div className="stats-list">
            <img src={getImageUrl(character.id)} className="portrait" alt={character.id} />
            <div className="char-name">{character.name}</div>
            {DIALOG_STATS.map((stat) => (
              <div className="stats" key={stat.name} role="listitem">
                <u>{stat.name}</u>
                {`: ${stat.value} ${stat.unit && stat.value !== 'unknown' ? stat.unit : ''}`}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Dialog.propTypes = {
  characterId: PropTypes.number.isRequired,
  characters: PropTypes.array.isRequired,
  films: PropTypes.array.isRequired,
  planets: PropTypes.array.isRequired,
  species: PropTypes.array.isRequired,
  isDialogDataLoaded: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
};

export default Dialog;
