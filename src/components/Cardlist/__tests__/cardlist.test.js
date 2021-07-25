import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CardList from '../cardlist.component';
import { longCharactersList, shortCharactersList } from '../../../utils/test-mock.utils';

const BUTTON = 'button';

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
    const wrapper = mountCardListComponent(shortCharactersList);

    expect(wrapper).toMatchSnapshot();
  });

  it(`should render three (3) cards if three (3) characters are supplied to
    component`, () => {
    mountCardListComponent(shortCharactersList);

    const cards = screen.getAllByRole(BUTTON);
    expect(cards).toHaveLength(3);
  });

  it(`rendered cards should match character names when three (3) characters are supplied 
    to component`, () => {
    mountCardListComponent(shortCharactersList);

    const cards = screen.getAllByRole(BUTTON);
    cards.forEach((card, index) => {
      expect(card).toHaveTextContent(shortCharactersList[index].name);
    });
  });

  it(`should render six (6) cards if six (6) characters are supplied to
  component`, () => {
    mountCardListComponent(longCharactersList);

    const cards = screen.getAllByRole(BUTTON);
    expect(cards).toHaveLength(6);
  });

  it(`rendered cards should match character names when six (6) characters are supplied
    to component`, () => {
    mountCardListComponent(longCharactersList);

    const cards = screen.getAllByRole(BUTTON);
    cards.forEach((card, index) => {
      expect(card).toHaveTextContent(longCharactersList[index].name);
    });
  });
});
