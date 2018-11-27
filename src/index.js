import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route } from 'react-router-dom';
import PostIndex from './components/PostIndex'

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  promise,
)(createStore);

const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={PostIndex} />
            </div>
        </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));