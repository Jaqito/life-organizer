import React from 'react';
import { Switch, Redirect, } from 'react-router-dom';
import { RouteWithLayout } from '../components';
import { MainLayout } from '../layouts';
import {Home} from '../views'

const UnprotectedRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/"  to="/home"/>
      <RouteWithLayout
        component={Home}
        exact
        layout={MainLayout}
        path="/home"
      />
    </Switch>
  );
};

export default UnprotectedRoutes;