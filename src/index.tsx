import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'src/store/store';
import App from 'src/App';

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider
      maxSnack={5}
      autoHideDuration={5000}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SnackbarProvider>
  </Provider>,
  document.getElementById('root'),
);
