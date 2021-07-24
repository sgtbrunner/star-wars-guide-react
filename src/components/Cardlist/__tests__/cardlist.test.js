import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CardList from '../cardlist.component';

const BUTTON = 'button';

const loadedCharactersA = [
  {
    id: 0,
    name: 'Anakin Skywalker',
  },
  {
    id: 1,
    name: 'Obi-Wan Kenoby',
  },
  {
    id: 2,
    name: 'Yoda',
  },
];

const loadedCharactersB = [
  ...loadedCharactersA,
  {
    id: 3,
    name: 'Darth Vader',
  },
  {
    id: 4,
    name: 'Palpatine',
  },
];

const store = createStore(() => {});
const mountCardListComponent = (characters = []) =>
  render(
    <Provider store={store}>
      <CardList characters={characters} />
    </Provider>
  );

describe('CardList component', () => {
  it('should match snapshot when characters are NOT supplied to component', () => {
    const wrapper = mountCardListComponent();

    expect(wrapper).toMatchSnapshot();
  });

  it(`should render 'No characters found' alert if characters are NOT supplied to
    component`, () => {
    mountCardListComponent();

    const cards = screen.queryAllByRole('button');
    expect(cards.length).toBe(0);

    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent(/no characters found!/i);
  });

  it('should match snapshot when characters are supplied to component', () => {
    const wrapper = mountCardListComponent(loadedCharactersA);

    expect(wrapper).toMatchSnapshot();
  });

  it(`should render three (3) cards if three (3) characters are supplied to
    component`, () => {
    mountCardListComponent(loadedCharactersA);

    const cards = screen.getAllByRole(BUTTON);
    expect(cards).toHaveLength(3);
  });

  it(`rendered cards should match character names when three (3) characters are supplied 
    to component`, () => {
    mountCardListComponent(loadedCharactersA);

    const cards = screen.getAllByRole(BUTTON);
    cards.forEach((card, index) => {
      expect(card).toHaveTextContent(loadedCharactersA[index].name);
    });
  });

  it(`should render five (5) cards if five (5) characters are supplied to
  component`, () => {
    mountCardListComponent(loadedCharactersB);

    const cards = screen.getAllByRole(BUTTON);
    expect(cards).toHaveLength(5);
  });

  it(`rendered cards should match character names when five (5) characters are supplied
    to component`, () => {
    mountCardListComponent(loadedCharactersB);

    const cards = screen.getAllByRole(BUTTON);
    cards.forEach((card, index) => {
      expect(card).toHaveTextContent(loadedCharactersB[index].name);
    });
  });
});
