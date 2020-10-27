import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ControllerPage from '../../components/controller/Controller';
import DetailControllerPage from '../../components/controller/DetailController';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={ControllerPage}
          />
          <Route
            path="/details/:id"
            exact
            component={DetailControllerPage}
          />
        </Switch>
      </Router>
    </div>
  );
}
