import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import App from '@/components/core/App';

import './styles/common/fonts.css';
import './styles/common/variables.css';
import './styles/common/scaffolding.css';

const history = createBrowserHistory();

render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('app-root'),
);
