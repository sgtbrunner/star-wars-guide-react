import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from '../header.component';

const mountHeaderComponent = () => render(<Header />);

describe('Header component', () => {
  it('should match snapshot', () => {
    const wrapper = mountHeaderComponent();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render component without errors', () => {
    mountHeaderComponent();

    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });
});
