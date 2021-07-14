import { BASE_IMAGE_URL } from './constants.utils';

export const addCharactersId = (list) => {
  list.forEach((item, index) => {
    // eslint-disable-next-line no-param-reassign
    item.id = index;
  });
};

export const getImageUrl = (index) => `${BASE_IMAGE_URL}${index < 16 ? index + 1 : index + 2}.jpg`;

// Used for fetching "species" and "homeworld" information from characters
export const getStats = async (url) => {
  // SWAPI hasn't defined "species" nor "homeworld" for some characters, therefore it has to be handled accordingly
  if (url.toString() !== '' && url.toString() !== [] && url.toString() !== {}) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (err) {
      console.log('ooooooops', err);
    }
  } else {
    return await { name: 'unknown' };
  }
};

// Used for fetching "films" information from characters
export const getFilms = async function (urls) {
  let movies = '';
  let i = 0;
  try {
    for (i = 0; i < urls.length; i++) {
      const response = await fetch(urls[i]);
      const movie = await response.json();
      if (i < urls.length - 1) {
        movies += `${movie.title}, `;
      } else {
        movies += movie.title;
      }
    }
  } catch (err) {
    console.log('ooooooops', err);
  }
  return movies;
};
