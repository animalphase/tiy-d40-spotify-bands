import store from './store.js';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Header from './components/header.js';
import HomePage from './components/home-page.js';

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={HomePage} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
}
