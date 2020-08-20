// import React from 'react';
// import { Switch, Redirect, Route } from 'react-router-dom';
// import { RouteWithLayout } from '../components';
// import { Minimal as MinimalLayout } from '../layouts';
//
// //these are routes that are home/sign in sign up etc that do not need to be password protected
// const UnsecureRoutes = () => {
//   return (
//     <Switch>
//       <Redirect exact from="/"  to="/home"/>
//       <RouteWithLayout
//         component={Home}
//         exact
//         layout={MinimalLayout}
//         path="/home"
//       />
//     </Switch>
//   );
// };
//
// export default UnsecureRoutes;