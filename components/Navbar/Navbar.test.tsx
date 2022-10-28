import { render } from '@testing-library/react';

import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Navbar />);
    }).not.toThrow();
  });
});
