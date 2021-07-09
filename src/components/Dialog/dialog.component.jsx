import React from 'react';
import PropTypes from 'prop-types';

import { getImageUrl } from '../../utils/functions.utils';
import './dialog.styles.css';

const Dialog = ({ character, race, planet, movies, onCloseClick }) => {
  const showContent = !!(race && planet && movies);
  const dialogStats = [
    { name: 'Birth Year', value: character?.birth_year },
    { name: 'Gender', value: character?.gender },
    { name: 'Species', value: race.name },
    { name: 'Homeworld', value: planet.name },
    { name: 'Films', value: movies },
  ];
  return (
    <div className="dialog">
      {!showContent ? (
        <div className="dialog-load">
          <div className="loader" />
        </div>
      ) : (
        <div className="dialog-content">
          <span className="close">
            <button type="button" className="bn pointer bg-transparent" onClick={onCloseClick}>
              &times;
            </button>
          </span>
          <div className="stats-list">
            <div className="char-name">{character.name}</div>
            <img src={getImageUrl(character.id)} className="portrait" alt={character.id} />
            {dialogStats.map((stat) => (
              <div className="stats" key={stat.name}>
                <u>{stat.name}</u>:&nbsp;
                {stat.value}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

Dialog.propTypes = {
  character: PropTypes.object.isRequired,
  race: PropTypes.object.isRequired,
  planet: PropTypes.object.isRequired,
  movies: PropTypes.string.isRequired,
  onCloseClick: PropTypes.func.isRequired,
};

export default Dialog;
