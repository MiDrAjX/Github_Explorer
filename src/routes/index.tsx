import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <switch>
    <Route path="/" component={Dashboard} />
  </switch>
);

export default Routes;
