import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import App from './App';
import Header from './components/Header';
import Details from './components/Details';
import NotFound from './404';

const Routes = () => {
    return (
        <Router>
          <Header />
          <main className="container">
            <Switch>
              <Route path="/" component={App} exact />
              <Route path="/details/:id" component={Details} exact />
              <Route path="*" component={NotFound} />
            </Switch>
          </main>
        </Router>
    )
}

export default Routes;