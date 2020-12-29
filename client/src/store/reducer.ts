import { combineReducers } from 'redux';

import captureReducer from '../reducers/capture';
import commonReducer from '../reducers/common';
import eventsReducer from '../reducers/events';

export const rootReducer = combineReducers({
  events: eventsReducer,
  capture: captureReducer,
  common: commonReducer,
});
