import { toast } from 'react-toastify';

import {
  CommonActionTypes,
  GET_CLIENTS_ONLINE,
  GET_SETTINGS,
  GET_SETTINGS_FAIL,
  LOADING_DONE,
  LOADING_START,
  SET_SETTINGS,
  SET_SETTINGS_FAIL,
  Settings,
  SOCKET_CONNECT,
  SOCKET_DISCONNECT,
} from '../actions/common.actionTypes';

interface DefaultStateI {
  loading: boolean;
  online: number;
  settings: Settings;
}

const defaultState: DefaultStateI = {
  loading: true,
  online: 0,
  settings: {
    arm: false,
    compress: false,
    debug: false,
  },
};

export default (
  state: DefaultStateI = defaultState,
  action: CommonActionTypes
): DefaultStateI => {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case LOADING_DONE:
      return {
        ...state,
        loading: false,
      };
    case GET_CLIENTS_ONLINE:
      return {
        ...state,
        online: action.online,
      };
    case GET_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.settings,
        },
      };
    case SET_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.settings,
        },
      };
    case SOCKET_DISCONNECT:
      toast.dark('Problems with socket connection');
      return { ...state };
    case GET_SETTINGS_FAIL:
      toast.dark('Problems with get settings');
      return { ...state };
    case SET_SETTINGS_FAIL:
      toast.dark('Problems with set settings');
      return { ...state };
    case SOCKET_CONNECT:
    default:
      return { ...state };
  }
};
