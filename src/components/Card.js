import React from 'react';
import { getImage } from '../utils/functions.utils';

const Card = ({ name, index, openModal }) => (
  <div onClick={openModal}>
    <div className="card" id={index}>
      <img className="picture" src={getImage(index)} alt="character-portrait" id={index} />
      <div className="title" id={index}>
        {name}
      </div>
    </div>
  </div>
);

export default Card;
