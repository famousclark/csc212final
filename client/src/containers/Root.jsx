// React
import React, { Component } from 'react';

// Redux
import {Provider} from 'react-redux';
import {configureStore, sagaMiddleware} from '../store/configure';

// Sagas
import rootSaga from '../middleware/saga';

// Containers
import RouterContainer from './RouterContainer';

const store = configureStore();

sagaMiddleware.run(rootSaga);

class Root extends Component {

  render() {
    return(
      <Provider store={store}>
        <RouterContainer />
      </Provider>
    );
  }
}

export default Root;
