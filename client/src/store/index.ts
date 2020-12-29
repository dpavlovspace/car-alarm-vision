import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { rootReducer } from './reducer';

const middleware = [thunk];

export const composeStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export type AppState = ReturnType<typeof rootReducer>;
