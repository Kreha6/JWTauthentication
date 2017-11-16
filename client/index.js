import React from 'react'
import { render } from 'react-dom'
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';
import Header from './components/Header';
import $ from "jquery";

import './scss/main.scss';
import 'bootstrap';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const renderApp = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <main>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </main>
    </Router>
  </Provider>
)

const root = document.getElementById('app')
render(renderApp(), root)
