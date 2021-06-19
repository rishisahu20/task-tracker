import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

const RouterHandle = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Redirect from="*" to="/" />
      </Switch>
    </React.Fragment>
  );
};

export default RouterHandle;
