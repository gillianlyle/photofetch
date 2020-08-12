import React, {useState, useEffect} from 'react';
import Table from './components/Table';
import TableRow from './components/TableRow';

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    // fetch data from api
    fetch("https://picsum.photos/v2/list?&limit=50")
      .then(
        // receive data in json format
        response => response.json())
      .then(
        // update state of application
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
  }, []) // add empty array as 2nd argument so we only fetch data when component mounts 

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
          <Table>
            {results.map((result, index) => (
              <TableRow {...result} key={index} index={index} />
            ))}
          </Table>
        </>
    );
  }
}

export default App;
