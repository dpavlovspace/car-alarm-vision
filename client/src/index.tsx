import axios from 'axios';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import { composeStore } from './store';

axios.defaults.baseURL = process.env.API_URI;

render(
  <React.StrictMode>
    <Provider store={composeStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('app') as HTMLElement
);
