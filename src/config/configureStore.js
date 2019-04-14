import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from '../store/reducers';

export const history = createBrowserHistory();

export function configureStore(initialState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
      ),
    ),
  );
  return store;
}

export const store = configureStore();