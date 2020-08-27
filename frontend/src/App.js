import React from 'react';
import UnprotectedRoutes from "./routes/UnprotectedRoutes";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { Provider as ReduxStoreProvider } from 'react-redux'
import store from './store'

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReduxStoreProvider store={store}>
        <BrowserRouter>
          <UnprotectedRoutes />
        </BrowserRouter>
      </ReduxStoreProvider>
    </ThemeProvider>
  );
}

export default App;
