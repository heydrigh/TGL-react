import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ResetPassword from '../pages/ResetPassword';
import Register from '../pages/Register';
import NewGame from '../pages/NewGame';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/resetpassword" component={ResetPassword} />
    <Route path="/register" component={Register} />
    <Route path="/newgame" component={NewGame} />
  </Switch>
);

export default Routes;
