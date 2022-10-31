import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Button from './Button';

describe('Button', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Button type="Product" style="Standard" />);
    }).not.toThrow();
  });
});
