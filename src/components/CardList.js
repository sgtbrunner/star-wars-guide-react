import React from 'react';
import Card from './Card';

const CardList = ({ filteredCharacters, openModal }) => {
  if (filteredCharacters.length) {
    return (
      <div id="cardlist">
        {filteredCharacters.map((character) => {
          return (
            <Card
              name={character.name}
              index={character.id}
              key={character.id}
              openModal={openModal}
            />
          );
        })}
      </div>
    );
  }
  return (
    <div className="pa2 ma3 custom-field tc">
      <p1 className="custom-font animate-flicker tc">No characters found!</p1>
    </div>
  );
};

export default CardList;
