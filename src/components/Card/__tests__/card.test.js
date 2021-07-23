import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../card.component';

const props = {
  name: 'Teste',
  index: 0,
  openDialog: jest.fn(),
};

const mountCardComponent = (newProps) => render(<Card {...props} {...newProps} />);

describe('Card component', () => {
  it('should match snapshot', () => {
    const wrapper = mountCardComponent();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render component without errors', () => {
    mountCardComponent();

    const card = screen.getByRole('button');
    const cardImage = screen.getByAltText('character-portrait');
    const cardTitle = screen.getByText(props.name);

    expect(card).toBeInTheDocument();
    expect(cardImage).toBeInTheDocument();
    expect(cardTitle).toBeInTheDocument();
  });
});
