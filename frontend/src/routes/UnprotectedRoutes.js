import React from 'react';
import { Switch, Redirect, } from 'react-router-dom';
import { RouteWithLayout } from '../components';
import { MainLayout } from '../layouts';
import {
  Home,
  Stocks,
  News,
  Documentation,
} from '../containers'

const UnprotectedRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/"  to="/documentation"/>
      <RouteWithLayout
        component={Documentation}
        exact
        layout={MainLayout}
        path="/documentation"
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


// <RouteWithLayout
//   component={Home}
//   exact
//   layout={MainLayout}
//   path="/home"
// />