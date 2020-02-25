import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-router-dom';

import store from './reducer/store';
import '../public/index.css'

ReactDOM.render(
  <Provider store={store}>
    <div>Hello, world!</div>
  </Provider>,
  document.getElementById('app')
);
