import React from 'react';
import { render, screen } from '@testing-library/react';

import SearchBox from '../searchbox.component';

const mountSearchBoxComponent = () => render(<SearchBox searchChange={jest.fn()} />);

describe('SearchBox component', () => {
  it('should match snapshot', () => {
    const wrapper = mountSearchBoxComponent();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render components without error', () => {
    mountSearchBoxComponent();

    const searchbox = screen.getByRole('searchbox');
    expect(searchbox).toBeInTheDocument();
  });
});
