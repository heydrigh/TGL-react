import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import ResetPassword from '../pages/ResetPassword';
import Register from '../pages/Register';
import NewGame from '../pages/NewGame';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/resetpassword" exact component={ResetPassword} />
    <Route path="/register" exact component={Register} />
    <Route path="/newgame" exact component={NewGame} />
  </Switch>
);

export default Routes;
