import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Pages/login';
import Index from './Pages/index';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={Index} exact />
        <Route path={'/login'} component={Login} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
