import {
  getIdParamFromUrl,
  capitalizeFirstLetter,
  getImageUrl,
  updateCharactersProperties,
} from '../functions.utils';
import { BASE_IMAGE_URL } from '../constants.utils';

describe('Functions', () => {
  describe('getIdParamFromUrl', () => {
    it('should return a valid number ID when url has an ID within it', () => {
      const idList = [2, 15, 46, 8];
      const validUrlList = [
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/planets/15/',
        'https://swapi.dev/api/vehicles/46/',
        'https://swapi.dev/api/people/8/',
      ];

      validUrlList.forEach((url, index) => {
        const id = getIdParamFromUrl(url);
        expect(id).toBe(idList[index]);
      });
    });

    it(`should return 'NaN' when url doesn't contain an ID within it`, () => {
      const invalidUrlList = ['', 'https://swapi.dev/api/films/', null, undefined];

      invalidUrlList.forEach((url) => {
        const id = getIdParamFromUrl(url);
        expect(id).toBeNaN();
      });
    });

    it(`should thrown an error whein url is invalid`, () => {
      const invalidUrlList = [123456, true, false, {}, []];

      invalidUrlList.forEach((url) => {
        expect(() => {
          getIdParamFromUrl(url);
        }).toThrowError('url.replace is not a function');
      });
    });
  });

  describe('capitalizeFirstLetter', () => {
    it('should return correctly capitalized first letter when input is valid', () => {
      const validInputs = ['mace', 'leia', 'anakin', 'yOdA', 'Luke', 'DARTH'];
      const validOutputs = ['Mace', 'Leia', 'Anakin', 'YOdA', 'Luke', 'DARTH'];

      validInputs.forEach((input, index) => {
        const output = capitalizeFirstLetter(input);
        expect(output).toBe(validOutputs[index]);
      });
    });

    it('should throw an error when input is invalid', () => {
      const invalidInputs = ['', null, undefined, 123456, true];

      invalidInputs.forEach((input) => {
        expect(() => {
          capitalizeFirstLetter(input);
        }).toThrowError();
      });
    });
  });

  describe('getImageUrl', () => {
    it('should return correct image urls when index is valid', () => {
      const validIndexes = [0, '3', 5, 15, 28, 43, '69', 89];
      const validUrlIndexes = [1, 4, 6, 16, 30, 45, 71, 91];

      validIndexes.forEach((input, index) => {
        const output = getImageUrl(input);
        expect(output).toBe(`${BASE_IMAGE_URL}${validUrlIndexes[index]}.jpg`);
      });
    });

    it('should return null when index is invalid', () => {
      const invalidIndexes = ['dasio', true, null, undefined];

      invalidIndexes.forEach((input) => expect(getImageUrl(input)).toBeNull());
    });
  });

  describe('updateCharactersProperties', () => {
    const character = {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      gender: 'male',
      homeworld: 'https://swapi.dev/api/planets/1/',
      films: [
        'https://swapi.dev/api/films/2/',
        'https://swapi.dev/api/films/6/',
        'https://swapi.dev/api/films/3/',
        'https://swapi.dev/api/films/1/',
        'https://swapi.dev/api/films/7/',
      ],
      species: ['https://swapi.dev/api/species/1/'],
    };

    it('should add id and update homeworld, films and species on character', () => {
      const updateCharacter = updateCharactersProperties([character]);

      expect(updateCharacter[0]).toHaveProperty('id');
      expect(updateCharacter[0].homeworld).toStrictEqual(1);
      expect(updateCharacter[0].films).toStrictEqual([2, 6, 3, 1, 7]);
      expect(updateCharacter[0].species).toStrictEqual([1]);
    });
  });
});
