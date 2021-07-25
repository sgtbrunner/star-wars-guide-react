const MALE = 'male';

export const shortCharactersList = [
  {
    id: 0,
    name: 'Anakin Skywalker',
    gender: MALE,
    birth_year: '41.9BBY',
    height: 188,
    mass: 84,
    species: [1],
    homeworld: 1,
    films: [4, 5, 6],
  },
  {
    id: 1,
    name: 'Obi-Wan Kenoby',
    birth_year: '57BBY',
    gender: MALE,
    height: 182,
    mass: 77,
    species: [1],
    homeworld: 3,
    films: [1, 2, 3, 4, 5, 6],
  },
  {
    id: 2,
    name: 'Yoda',
    birth_year: '896BBY',
    gender: MALE,
    height: 66,
    mass: 17,
    species: [2],
    homeworld: 4,
    films: [2, 3, 4, 5, 6],
  },
];

export const longCharactersList = [
  ...shortCharactersList,
  {
    id: 3,
    name: 'Darth Vader',
    birth_year: '41.9BBY',
    gender: MALE,
    height: 202,
    mass: 136,
    species: [1],
    homeworld: 1,
    films: [1, 2, 3, 6],
  },
  {
    id: 4,
    name: 'Luke Skywalker',
    birth_year: '19BBY',
    gender: MALE,
    height: 172,
    mass: 77,
    species: [0],
    homeworld: 1,
    films: [1, 2, 3, 6],
  },
  {
    id: 5,
    name: 'Palpatine',
    birth_year: '82BBY',
    gender: MALE,
    height: 170,
    mass: 75,
    species: [1],
    homeworld: 1,
    films: [2, 3, 4, 5, 6],
  },
];

export const species = [{ name: 'Human' }, { name: `Yoda's species` }];

export const planets = [
  { name: 'Tatooine' },
  { name: 'Naboo' },
  { name: 'Stewjon' },
  { name: 'unknown' },
];

export const films = [
  { title: 'A New Hope' },
  { title: 'The Empire Strikes Back' },
  { title: 'Return of the Jedi' },
  { title: 'The Phantom Menace' },
  { title: 'Attack of the Clones' },
  { title: 'Revenge of the Sith' },
];
