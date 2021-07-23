import React from 'react';
import { render, screen } from '@testing-library/react';

import Loader from '../loader.component';

const mountLoaderComponent = () => render(<Loader />);

describe('Loader component', () => {
  it('should match snapshot', () => {
    const wrapper = mountLoaderComponent();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render component without errors', () => {
    mountLoaderComponent();

    const loader = screen.getByText(/please wait/i);
    expect(loader).toBeInTheDocument();
  });
});
