import axios from 'axios';
import { Dispatch } from 'redux';

import socket from '../socket';
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
} from './common.actionTypes';

export const onSocketInit = () => async (
  dispatch: Dispatch<CommonActionTypes>
): Promise<void> => {
  socket
    .on('connect', () => {
      dispatch({ type: SOCKET_CONNECT });
    })
    .on('disconnect', () => {
      dispatch({ type: SOCKET_DISCONNECT });
    })
    .on('online', (online: number) => {
      dispatch({ type: GET_CLIENTS_ONLINE, online });
    });
};

export const onSocketDestroy = () => async (
  dispatch: Dispatch<CommonActionTypes>
): Promise<void> => {
  await socket.off('connect');
  await socket.off('disconnect');
};

export const loadingStart = () => async (
  dispatch: Dispatch<CommonActionTypes>
): Promise<void> => {
  dispatch({ type: LOADING_START });
};

export const loadingDone = () => async (
  dispatch: Dispatch<CommonActionTypes>
): Promise<void> => {
  dispatch({ type: LOADING_DONE });
};

export const getSettings = () => async (
  dispatch: Dispatch<CommonActionTypes>
): Promise<void> => {
  try {
    const { data } = await axios.get('/api/getSettings');
    dispatch({ type: GET_SETTINGS, settings: data as Settings });
  } catch (error) {
    dispatch({ type: GET_SETTINGS_FAIL });
  }
};

export const setSettings = (settings: Settings) => async (
  dispatch: Dispatch<CommonActionTypes>
): Promise<void> => {
  try {
    dispatch({ type: SET_SETTINGS, settings });
  } catch (error) {
    dispatch({ type: SET_SETTINGS_FAIL });
  }
};
