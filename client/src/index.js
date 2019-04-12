// React
import React from 'react';
import ReactDOM from 'react-dom';

// CSS -- not used
import './index.css';

import App from './App';

// Store
import { sagaMiddleware, configureStore } from './store/configure';

// Sagas
import rootSaga from './middleware/saga';

const store: Object = configureStore();

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <App store = {store}/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
