import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Main from '../main.component';

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
    name: 'Luke Skywalker',
  },
  {
    id: 5,
    name: 'Palpatine',
  },
];

const store = createStore(() => {});
const mountMainComponent = (characters) =>
  render(
    <Provider store={store}>
      <Main characters={characters} />
    </Provider>
  );

describe('Main component', () => {
  it('should match initial snapshot', () => {
    const wrapper = mountMainComponent(loadedCharactersB);

    expect(wrapper).toMatchSnapshot();
  });

  it(`should render all 6 (six) characters if nothing is input on searchbox`, () => {
    mountMainComponent(loadedCharactersB);

    // clear the searchbox
    const searchbox = screen.getByRole('searchbox');
    userEvent.clear(searchbox);

    // assert for existing cards
    const cards = screen.getAllByRole('button');
    expect(cards).toHaveLength(6);
    cards.forEach((card, index) => expect(card).toHaveTextContent(loadedCharactersB[index].name));
  });

  it(`should render 2 (two) characters only when names are filtered down to "sky",
    Anakin Skywalker and Luke Skywalker`, () => {
    mountMainComponent(loadedCharactersB);

    // type in "sky" on searchbox
    const searchbox = screen.getByRole('searchbox');
    userEvent.clear(searchbox);
    userEvent.type(searchbox, 'sky');

    // assert for existing cards
    const cards = screen.getAllByRole('button');
    expect(cards).toHaveLength(2);
    expect(cards[0]).toHaveTextContent(loadedCharactersB[0].name);
    expect(cards[1]).toHaveTextContent(loadedCharactersB[4].name);
  });

  it(`should render 1 (one) character only when names are filtered down to "darth",
    Darth Vader`, () => {
    mountMainComponent(loadedCharactersB);

    // type in "darth" on searchbox
    const searchbox = screen.getByRole('searchbox');
    userEvent.clear(searchbox);
    userEvent.type(searchbox, 'darth');

    // assert for existing cards
    const cards = screen.getAllByRole('button');
    expect(cards.length).toBe(1);
    expect(cards[0]).toHaveTextContent(loadedCharactersB[3].name);
  });

  it(`should render 'No characters found' alert if NO characters are found after
    filtering characters by 'gsrfgsegse' name`, () => {
    mountMainComponent(loadedCharactersB);

    // type in "gsrfgsegse" on searchbox
    const searchbox = screen.getByRole('searchbox');
    userEvent.clear(searchbox);
    userEvent.type(searchbox, 'gsrfgsegse');

    // assert that cards do not exist
    const cards = screen.queryAllByRole('button');
    expect(cards.length).toBe(0);

    // assert for "no characters found" alert
    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent(/no characters found!/i);
  });
});
