import React from 'react';
import UnprotectedRoutes from "./routes/UnprotectedRoutes";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';


const browserHistory = createBrowserHistory();


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <UnprotectedRoutes />
      </Router>
    </ThemeProvider>
  );
}

export default App;


  //return (
  // <ThemeProvider theme={theme}>
  //   <Provider store={store}>
  //     <Router history={browserHistory}>
  //       <Security
  //         issuer={issuer}
  //         client_id={client_id}
  //         redirect_uri={redirectURI}
  //         onAuthRequired={onAuthRequired}
  //       >
  //         <UnsecureRoutes />
  //         <SecureRoutes />
  //       </Security>
  //     </Router>
  //   </Provider>
  // </ThemeProvider>
  //);