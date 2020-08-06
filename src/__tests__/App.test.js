import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from './../App';
import {BrowserRouter as Router} from 'react-router-dom';
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });

  test('data is loading', () => {
    render(<App />);
    
    // Check that 'Loading...' exists
    screen.getByText('Loading...');
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
  
  test("user data loaded", async () => {
    const results = [{
      author: 'Gillian'
    }]

    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(results)
      })
    );
  
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(<Router><App /></Router>);
    });

    // Check that Table exists
    expect(screen.getByRole('table')).toBeInTheDocument();

    // Check that Author name is passed through
    screen.getByText('Gillian');
    expect(screen.getByText('Gillian')).toBeInTheDocument();
    })
});