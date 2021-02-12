import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Login from '../../Pages/login';

const AuthRoutes = () => (
  <Switch>
    <Route path="/" component={Login} exact />
  </Switch>
);

export default AuthRoutes;
