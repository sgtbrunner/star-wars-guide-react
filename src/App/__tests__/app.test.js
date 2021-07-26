import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { longCharactersList, species, planets, films } from '../../utils/test-mock.utils';
import { DATA_INITIAL_STATE, DIALOG_INITIAL_STATE } from '../../utils/constants.utils';

import App from '../index';

const props = {
  isCharactersLoading: true,
  loadCharacters: jest.fn(),
  loadFilms: jest.fn(),
  loadPlanets: jest.fn(),
  loadSpecies: jest.fn(),
  showDialog: false,
};

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const LOADING_STATE = {
  ...DATA_INITIAL_STATE,
  isLoading: true,
};

const initialData = {
  characters: LOADING_STATE,
  films: LOADING_STATE,
  planets: LOADING_STATE,
  species: LOADING_STATE,
  dialog: DIALOG_INITIAL_STATE,
};

const initialStore = mockStore(initialData);

const mountApp = (store = initialStore, newProps = {}) =>
  render(
    <Provider store={store}>
      <App {...props} {...newProps} />,
    </Provider>
  );

describe('App', () => {
  const loadedData = {
    ...initialData,
    characters: {
      ...DATA_INITIAL_STATE,
      data: longCharactersList,
    },
    films: {
      ...DATA_INITIAL_STATE,
      data: films,
    },
    planets: {
      ...DATA_INITIAL_STATE,
      data: planets,
    },
    species: {
      ...DATA_INITIAL_STATE,
      data: species,
    },
  };

  const openDialogData = {
    ...loadedData,
    dialog: {
      isOpen: true,
      characterId: 0,
    },
  };

  const loadedStore = mockStore(loadedData);
  const openDialogStore = mockStore(openDialogData);

  it('should match snapshot when characters are loading', () => {
    const wrapper = mountApp();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render loader component while characters are loading', () => {
    mountApp();

    const loader = screen.getByText(/please wait/i);
    expect(loader).toBeInTheDocument();
  });

  it('should match snapshot when characters are loaded and no dialog is open', () => {
    const wrapper = mountApp(loadedStore, { isCharactersLoading: false });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render header block component', () => {
    mountApp(loadedStore, { isCharactersLoading: false });

    const header = screen.getByAltText('logo');
    expect(header).toBeInTheDocument();
  });

  it('should render main block component', () => {
    mountApp(loadedStore, { isCharactersLoading: false });

    // asserts for rendered button cards
    const cards = screen.getAllByRole('button');
    expect(cards).toHaveLength(6);
    cards.forEach((card, index) => expect(card).toHaveTextContent(longCharactersList[index].name));
  });

  it('should render footer block component', () => {
    mountApp(loadedStore, { isCharactersLoading: false });

    const title = screen.getByText(/guilherme brunner/i);
    const link = screen.getByRole('link', { name: /visit my portfolio/i });

    expect(title).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  it('should match snapshot when characters are loaded and dialog is open', () => {
    const wrapper = mountApp(openDialogStore, { isCharactersLoading: false, showDialog: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render dialog content when characters are loaded and dialog is open', () => {
    mountApp(openDialogStore, { isCharactersLoading: false, showDialog: true });

    const portrait = screen.getByRole('img', { name: '0' });
    const stats = screen.getAllByRole('listitem');

    expect(portrait).toBeInTheDocument();
    expect(stats).toHaveLength(7);
  });
});
