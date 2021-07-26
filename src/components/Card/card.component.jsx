import React from 'react';
import PropTypes from 'prop-types';

import { getImageUrl } from '../../utils/functions.utils';
import './card.styles.css';

const Card = ({ name, index, openDialog }) => (
  <button id={index} type="button" onClick={openDialog} className="card pointer">
    <img src={getImageUrl(index)} alt="character-portrait" id={index} />
    <div className="name" id={index}>
      {name}
    </div>
  </button>
);

Card.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  openDialog: PropTypes.func.isRequired,
};

export default Card;
