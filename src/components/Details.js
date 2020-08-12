import React, {useState, useEffect} from 'react';
import Card from './Card';

const Details = route => {

    const id = route.match.params.id // store id passed from route

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [results, setResults] = useState([]);

    useEffect(() => {
        
        // fetch record from api
        fetch(`https://picsum.photos/id/${id}/info`)
            .then(
                // receive data in json format
                response => response.json()) 
            .then(
                //update state of application
                result => {
                    setIsLoaded(true);
                    setResults(result);
                },
                // handle any errors
                error => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
        }
    )

    if (error) {
        return (
            <div className="alert alert-primary" role="alert">
                Error: {error.message}
            </div>
        )
    } else if (!isLoaded) {
        return (
            <div className="alert alert-warning" role="alert">
                Loading...
            </div>
        )
    } else {
        return (
            <>
                <a href="/" className="btn btn-link">
                    <i className="fas fa-arrow-left"></i> 
                     Back
                </a>
                <hr/>
                <Card 
                    id={results.id} 
                    author={results.author} 
                    download_url={results.download_url} 
                    width={results.width} 
                    height={results.height} 
                />
            </>
        );
    }
}

export default Details;