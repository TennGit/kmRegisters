import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import rootReducer from './reducers/rootReducer'
import {BrowserRouter as Router} from 'react-router-dom'
import promise from "redux-promise-middleware";
import axios from 'axios';

const store = createStore(rootReducer, applyMiddleware(promise()));

store.dispatch({
    type:"LOAD_SIDE_TEXT",
    payload:axios.get('https://jsonplaceholder.typicode.com/posts/1')
})

render(
  <Provider store={store}>
      <Router>
          <App />
      </Router>
  </Provider>,
  document.getElementById('root')
);