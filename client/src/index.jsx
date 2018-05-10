import React from 'react';
import { render } from 'react-dom';

import App from './components/App/App';

import './main.css';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    renderApp();
  });
}
