import React from 'react';
import PropTypes from 'prop-types';

import { getImageUrl, capitalizeFirstLetter } from '../../utils/functions.utils';
import './dialog.styles.css';

const Dialog = ({
  characterId,
  characters,
  // films,
  planets,
  // species,
  // starships,
  // vehicles,
  isDialogDataLoaded,
  closeDialog,
}) => {
  const character = characters[characterId];
  const DIALOG_STATS = isDialogDataLoaded && [
    { name: 'Gender', value: capitalizeFirstLetter(character.gender) },
    { name: 'Birth Year', value: character.birth_year },
    { name: 'Height', value: character.height, unit: 'cm' },
    { name: 'Weight', value: character.mass, unit: 'Kg' },
    { name: 'Homeworld', value: planets[character.homeworld - 1].name },
    // { name: 'Species', value: race?.name },
    // { name: 'Films', value: films },
  ];

  return (
    <div className="dialog">
      {!isDialogDataLoaded ? (
        <div className="dialog-load">
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
            <div className="char-name">{character.name}</div>
            <img src={getImageUrl(character.id)} className="portrait" alt={character.id} />
            {DIALOG_STATS.map((stat) => (
              <div className="stats" key={stat.name}>
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
  // films: PropTypes.array.isRequired,
  planets: PropTypes.array.isRequired,
  // species: PropTypes.array.isRequired,
  // starships: PropTypes.array.isRequired,
  // vehicles: PropTypes.array.isRequired,
  isDialogDataLoaded: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
};

export default Dialog;
