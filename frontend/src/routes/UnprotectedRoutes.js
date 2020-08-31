import React from 'react';
import { Switch, Redirect, } from 'react-router-dom';
import { RouteWithLayout } from '../components';
import { MainLayout } from '../layouts';
import {
  Home,
  Stocks,
  News,
} from '../containers'

const UnprotectedRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/"  to="/news"/>
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
      <RouteWithLayout
        component={News}
        exact
        layout={MainLayout}
        path="/news"
      />
    </Switch>
  );
};

export default UnprotectedRoutes;