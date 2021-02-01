import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../../Pages/index';

const AppRouter: React.FC = () => {
  return (
    <Switch>
      <Route path={'/'} component={Index} exact />
    </Switch>
  );
};

export default AppRouter;
