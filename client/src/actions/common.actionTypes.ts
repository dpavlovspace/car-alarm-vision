export const SOCKET_CONNECT = 'SOCKET_CONNECT';
export const SOCKET_DISCONNECT = 'SOCKET_DISCONNECT';
export const LOADING_START = 'LOADING_START';
export const LOADING_DONE = 'LOADING_DONE';
export const GET_CLIENTS_ONLINE = 'GET_CLIENTS_ONLINE';
export const GET_CLIENTS_ONLINE_FAIL = 'GET_CLIENTS_ONLINE_FAIL';
export const GET_SETTINGS = 'GET_SETTINGS';
export const GET_SETTINGS_FAIL = 'GET_SETTINGS_FAIL';
export const SET_SETTINGS = 'SET_SETTINGS';
export const SET_SETTINGS_FAIL = 'GET_SETTINGS_FAIL';

export type Settings = {
  arm: boolean;
  compress: boolean;
  debug: boolean;
};

export interface SocketConnect {
  type: typeof SOCKET_CONNECT;
}

export interface SocketDisconnect {
  type: typeof SOCKET_DISCONNECT;
}

export interface Loading {
  type: typeof LOADING_START;
}

export interface Loaded {
  type: typeof LOADING_DONE;
}

export interface GetClientsOnline {
  type: typeof GET_CLIENTS_ONLINE;
  online: number;
}

export interface GetClientsOnlineFail {
  type: typeof GET_CLIENTS_ONLINE_FAIL;
}

export interface GetSettings {
  type: typeof GET_SETTINGS;
  settings: Settings;
}

export interface GetSettingsFail {
  type: typeof GET_SETTINGS_FAIL;
}

export interface SetSettings {
  type: typeof SET_SETTINGS;
  settings: Settings;
}

export interface SetSettingsFail {
  type: typeof SET_SETTINGS_FAIL;
}

export type CommonActionTypes =
  | SocketConnect
  | SocketDisconnect
  | Loading
  | Loaded
  | GetClientsOnline
  | GetClientsOnlineFail
  | GetSettings
  | GetSettingsFail
  | SetSettings
  | SetSettingsFail;
