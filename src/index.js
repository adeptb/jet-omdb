import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<App store={store}/>, document.getElementById('root'))