import React from 'react';
import { Switch, Redirect, } from 'react-router-dom';
import { RouteWithLayout } from '../components';
import { MainLayout } from '../layouts';
import {
  Home,
  Stocks,
} from '../containers'

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
      <RouteWithLayout
        component={Stocks}
        exact
        layout={MainLayout}
        path="/stocks"
      />
    </Switch>
  );
};

export default UnprotectedRoutes;