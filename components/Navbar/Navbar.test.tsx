import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Navbar />);
    }).not.toThrow();
  });

  it('renders the main logo', () => {
    render(<Navbar />);
    const logo = screen.getByAltText(/audiophile.com/i);
    expect(logo).toBeInTheDocument();
  });

  it('renders the hamburger menu', () => {
    render(<Navbar />);
    const menu = screen.getByAltText(/side menu/i);
    expect(menu).toBeInTheDocument();
  });

  it('renders the cart icon', () => {
    render(<Navbar />);
    const cart = screen.getByAltText(/my cart/i);
    expect(cart).toBeInTheDocument();
  });
});
