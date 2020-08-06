import React from 'react';
import { render, screen } from '@testing-library/react';
import TableRow from './../components/TableRow';
import {BrowserRouter as Router} from 'react-router-dom';
 
describe('TableRow', () => {

  test('renders TableRow component', () => {
    render(<Router><TableRow /></Router>);   
  }); 

  test('renders must have elements', () => {
    const author = "Gillian";
    const download_url = 'https://example.com/image.png';
    const id = '1'

    render(<Router><TableRow author={author} download_url={download_url} id={id}/></Router>);

    // Check that <tr> exists
    expect(screen.getByRole('row')).toBeInTheDocument();

    // Check that <th> exists
    expect(screen.getByRole('rowheader')).toBeInTheDocument();

    // Check that 'Details' link exists
    screen.getByText('Details');
    expect(screen.getByText('Details')).toBeInTheDocument();
  });

  test('returns props', () => {
    const author = "Gillian";
    const download_url = 'https://example.com/image.png';
    const id = '1'

    render(<Router><TableRow author={author} download_url={download_url} id={id}/></Router>);

    // Check that 'download_url' is returned
    screen.getByRole('img');
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/image.png');

    // Check that 'Author' is returned
    screen.getByText('Gillian');
    expect(screen.getByText('Gillian')).toBeInTheDocument();

    // Check that 'id' is returned
    screen.getByRole('link');
    expect(screen.getByRole('link')).toHaveAttribute('href', '/details/1');
  });
});