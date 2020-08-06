import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './../components/Card';


describe('Card', () => {

    test('renders Card component', () => {
        render(<Card />);   
    }); 

    test('renders must have elements', () => {
        const id = "1";
        const author = 'Gillian'
        const download_url = 'https://example.com/image.png';
        const width = 100;
        const height = 200;

        render(<Card 
            id={id} 
            author={author} 
            download_url={download_url} 
            width={width} 
            height={height} 
        />);  

        // Check that Image exists
        screen.getByRole('img');
        expect(screen.getByRole('img')).toBeInTheDocument();

        // Check that 'Download' button exists
        screen.getByText('Download Image');
        expect(screen.getByText('Download Image')).toBeInTheDocument();
    });

    test('returns props', () => {
        const id = "1";
        const author = 'Gillian'
        const download_url = 'https://example.com/image.png';
        const width = 100;
        const height = 200;

        render(<Card 
            id={id} 
            author={author} 
            download_url={download_url} 
            width={width} 
            height={height} 
        />);  

        // Check that 'download_url' is returned
        screen.getByRole('img');
        expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/image.png');

        // Check that 'Author' is returned
        screen.getByText('Author: Gillian');
        expect(screen.getByText('Author: Gillian')).toBeInTheDocument();

        // Check that 'Dimensions' are returned
        screen.getByText('Dimensions: 100px x 200px');
        expect(screen.getByText('Dimensions: 100px x 200px')).toBeInTheDocument();
    });
});