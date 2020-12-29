export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENTS_FAIL = 'GET_EVENTS_FAIL';
export const UPDATE_EVENTS = 'UPDATE_EVENTS';

export type Events = Array<{
  id: number;
  timestamp: number;
  type: string;
}>;

export interface GetEvents {
  type: typeof GET_EVENTS;
}

export interface GetEventsFail {
  type: typeof GET_EVENTS_FAIL;
}

export interface GetEventsSuccess {
  type: typeof GET_EVENTS_SUCCESS;
  events: Events;
}

export interface UpdateEvents {
  type: typeof UPDATE_EVENTS;
  events: Events;
}

export type EventsActionTypes =
  | GetEvents
  | GetEventsFail
  | GetEventsSuccess
  | UpdateEvents;
