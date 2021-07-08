import React from 'react';
import { getImage } from '../utils/functions.utils';

const Modal = ({ showModal, character, race, planet, movies, onCloseClick }) => {
  const showContent = !!(race && planet && movies);
  if (!showModal) {
    return null;
  }
  if (!showContent) {
    return (
      <div id="myModal" className="modal" onClick={onCloseClick}>
        <div className="modal-load">
          <div className="loader" />
        </div>
      </div>
    );
  }
  return (
    <div id="myModal" className="modal" onClick={onCloseClick}>
      <div className="modal-content">
        <span className="close" onClick={onCloseClick}>
          &times;
        </span>
        <div className="grid-container">
          <div className="char-name">{character.name}</div>
          <img src={getImage(character.id)} className="portrait" alt={character.id} />
          <div className="stats">
            <u>Birth Year</u>:&nbsp;
            {character.birth_year}
          </div>
          <div className="stats">
            <u>Gender</u>:&nbsp;
            {character.gender}
          </div>
          <div className="stats">
            <u>Species</u>:&nbsp;
            {race.name}
          </div>
          <div className="stats">
            <u>Homeworld</u>:&nbsp;
            {planet.name}
          </div>
          <div className="stats">
            <u>Films</u>:&nbsp;
            {movies}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
