import React from 'react';
import { render, screen } from '@testing-library/react';
import Details from './../components/Details';
 
describe('Details', () => {
  
  test('renders Details component', () => {
    render(<Details match={{params: {id: 1}}} />);   
  }); 

  test('Data is loading', () => {
    render(<Details match={{params: {id: 1}}} />); 
    // Check that 'Loading...' exists
    screen.getByText('Loading...');
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});