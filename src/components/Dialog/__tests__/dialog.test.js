import React from 'react';
import { render, screen } from '@testing-library/react';

import Dialog from '../dialog.component';
import { longCharactersList, films, planets, species } from '../../../utils/test-mock.utils';

const closeDialog = jest.fn();

const initialProps = {
  characterId: 0,
  characters: [],
  films: [],
  planets: [],
  species: [],
  isDialogDataLoaded: false,
};

const loadedCharacterProps = {
  characters: longCharactersList,
  films,
  planets,
  species,
  isDialogDataLoaded: true,
};

const loadedYodaCharacterProps = {
  ...loadedCharacterProps,
  characterId: 2,
};

const loadedVaderCharacterProps = {
  ...loadedCharacterProps,
  characterId: 3,
};

const mountDialogComponent = (newProps = initialProps) =>
  render(<Dialog closeDialog={closeDialog} {...newProps} />);

describe('Dialog component', () => {
  it('should match snapshot when data is loading', () => {
    const wrapper = mountDialogComponent();

    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when data is loaded', () => {
    const wrapper = mountDialogComponent(loadedYodaCharacterProps);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render dialog', () => {
    mountDialogComponent();

    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
  });

  it('should render loader alert within dialog when data is loading', () => {
    mountDialogComponent();

    const loader = screen.getByRole('alert');
    expect(loader).toBeInTheDocument();
  });

  it('should render a close button within dialog when data is loaded', () => {
    mountDialogComponent(loadedYodaCharacterProps);

    const closeButton = screen.getByRole('button', { name: '×' });
    expect(closeButton).toBeInTheDocument();
  });

  it(`should render a portrait image and a matched name for Yoda character within 
    dialog when Yoda data is loaded`, () => {
    mountDialogComponent(loadedYodaCharacterProps);

    const portrait = screen.getByRole('img');
    const name = screen.getByText('Yoda');

    expect(portrait).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it(`should render a portrait image and a matched name for Darth Vader character within 
    dialog when Darth Vader data is loaded`, () => {
    mountDialogComponent(loadedVaderCharacterProps);

    const portrait = screen.getByRole('img');
    const name = screen.getByText('Darth Vader');

    expect(portrait).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });

  it('should render 7 (seven) stats within dialog when any character data is loaded', () => {
    mountDialogComponent(loadedYodaCharacterProps);

    const stats = screen.getAllByRole('listitem');
    expect(stats).toHaveLength(7);
  });
});
