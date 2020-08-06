import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <>
            <h2>Oops, page not found</h2>
            <p>Sorry, looks like the page you're looking for no longer exists.</p>
            <p>Take me back to the <Link to="/">home page</Link>.</p>
        </>
    )
}

export default NotFound;