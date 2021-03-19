import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import App from '@/components/core/App';

import '@/assets/styles/variables.css';
import '@/assets/styles/fonts.css';
import '@/assets/styles/globals.css';

const history = createBrowserHistory();

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app-root'),
);
