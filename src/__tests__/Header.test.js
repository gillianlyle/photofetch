import React from 'react';
import { render, screen} from '@testing-library/react';
import Header from './../components/Header';
 
describe('Header', () => {
    test('renders Header component', () => {
        render(<Header />);   
      }); 

    test('renders must have elements', () => {
        render(<Header />);

        // Check that heading exists
        expect(screen.getByRole('heading')).toBeInTheDocument();

        // Check that <h1> text exists
        screen.getByText('Photo Fetch');
        expect(screen.getByText('Photo Fetch')).toBeInTheDocument();

        // Check that lead <p> text exists
        screen.getByText('A selection of photos from Lorem Picsum.');
        expect(screen.getByText('A selection of photos from Lorem Picsum.')).toBeInTheDocument();
    });
});