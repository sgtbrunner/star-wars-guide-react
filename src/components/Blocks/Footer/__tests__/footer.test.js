import React from 'react';
import { render, screen } from '@testing-library/react';

import Footer from '../footer.component';

const mountFooterComponent = () => render(<Footer />);

describe('Footer component', () => {
  it('should match snapshot', () => {
    const wrapper = mountFooterComponent();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render component without errors', () => {
    mountFooterComponent();

    const title = screen.getByText(/guilherme brunner/i);
    const link = screen.getByRole('link', { name: /visit my portfolio/i });

    expect(title).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });
});
