import { toast } from 'react-toastify';

import {
  Events,
  EventsActionTypes,
  GET_EVENTS,
  GET_EVENTS_FAIL,
  GET_EVENTS_SUCCESS,
  UPDATE_EVENTS,
} from '../actions/events.actionTypes';

interface DefaultStateI {
  events: Events;
}

const defaultState: DefaultStateI = {
  events: [],
};

export default (
  state: DefaultStateI = defaultState,
  action: EventsActionTypes
): DefaultStateI => {
  switch (action.type) {
    case GET_EVENTS:
      return { ...state };
    case GET_EVENTS_SUCCESS:
      return { ...state, events: action.events };
    case UPDATE_EVENTS:
      return {
        ...state,
        events: {
          ...state.events,
          ...action.events,
        },
      };
    case GET_EVENTS_FAIL:
      toast.dark('Problems with get events');
      return { ...state };
    default:
      return { ...state };
  }
};
