import { BASE_IMAGE_URL } from './constants.utils';

const getIdParamFromUrl = (url) => parseInt(url.replace(/\D/g, ''), 10);

const mapArrayPropertyToId = (item) => getIdParamFromUrl(item);

export const capitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);

export const getImageUrl = (index) => `${BASE_IMAGE_URL}${index < 16 ? index + 1 : index + 2}.jpg`;

export const updateCharactersProperties = (data) =>
  data.map((character, index) => ({
    id: index,
    ...character,
    homeworld: getIdParamFromUrl(character.homeworld),
    films: character.films.map(mapArrayPropertyToId),
    species: character.species.map(mapArrayPropertyToId),
    vehicles: character.vehicles.map(mapArrayPropertyToId),
    starships: character.starships.map(mapArrayPropertyToId),
  }));
