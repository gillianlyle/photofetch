import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './../components/Table';
 
describe('Table', () => {

  test('renders Table component', () => {
    render(<Table />);   
  }); 

  test('renders must have elements', () => {
    render(<Table />);

    // Check that <table> exists
    expect(screen.getByRole('table')).toBeInTheDocument();

    // Check that <tr> exists
    expect(screen.getByRole('row')).toBeInTheDocument();

    // Check that '#' column exists
    screen.getByText('#');
    expect(screen.getByText('#')).toBeInTheDocument();

    // Check that 'Image' column exists
    screen.getByText('Image');
    expect(screen.getByText('Image')).toBeInTheDocument();

    // Check that 'Author' column exists
    screen.getByText('Author');
    expect(screen.getByText('Author')).toBeInTheDocument();
  });
});