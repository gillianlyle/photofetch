import React from 'react';
import { render, screen } from '@testing-library/react';
import Routes from './../Routes';


describe('Routes', () => {

  test('renders Routes component', () => {
    render(<Routes />);   
  }); 

  test('renders must have elements', () => {
    render(<Routes />);
    
    // Check that heading exists
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});