import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHead from './../components/TableHead';
 
describe('TableHead', () => {

  test('renders TableHead component', () => {
    render(<TableHead />);   
  }); 

  test('renders must have elements', () => {
    render(<TableHead />);

    // Check that <thead> exists
    expect(screen.getByRole('rowgroup')).toBeInTheDocument();

    // Check that <tr> exists
    expect(screen.getByRole('row')).toBeInTheDocument();

    // Check that 'Image' column exists
    screen.getByText('Image');
    expect(screen.getByText('Image')).toBeInTheDocument();

    // Check that 'Author' column exists
    screen.getByText('Author');
    expect(screen.getByText('Author')).toBeInTheDocument();
  });
});