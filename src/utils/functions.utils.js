import { BASE_IMAGE_URL } from './constants.utils';

export const getIdParamFromUrl = (url) => parseInt(url?.replace(/\D/g, ''), 10);

const mapArrayPropertyToId = (item) => getIdParamFromUrl(item);

export const capitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1);

export const getImageUrl = (index) =>
  typeof index === 'number' || (typeof index === 'string' && Number(index))
    ? `${BASE_IMAGE_URL}${Number(index) < 16 ? Number(index) + 1 : Number(index) + 2}.jpg`
    : null;

export const updateCharactersProperties = (data) =>
  data.map((character, index) => ({
    id: index,
    ...character,
    homeworld: getIdParamFromUrl(character.homeworld),
    films: character.films.map(mapArrayPropertyToId),
    species: character.species.map(mapArrayPropertyToId),
  }));
