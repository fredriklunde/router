import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import rootReducer from './reducers';
import PostIndex from './components/PostIndex'
import PoststNes from './components/PostsNew'
import Postshow from './components/PostShow'

const createStoreWithMiddleware = applyMiddleware(
  promise,
)(createStore);

const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact component={PostIndex} />
                    <Route path="/posts/new" component={PoststNes} />
                    <Route path="/posts/:id" component={Postshow} />
                </Switch>
            </div>
        </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));