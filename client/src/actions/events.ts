import axios from 'axios';
import { Dispatch } from 'redux';

import {
  GET_EVENTS,
  GET_EVENTS_FAIL,
  GET_EVENTS_SUCCESS,
} from './events.actionTypes';

export const getEvents = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    dispatch({ type: GET_EVENTS });
    const { data } = await axios.get('/api/getLatestEvents');
    dispatch({ type: GET_EVENTS_SUCCESS, events: data.events });
  } catch (error) {
    dispatch({ type: GET_EVENTS_FAIL });
  }
};
