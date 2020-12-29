export const GET_FRAME = 'GET_FRAME';
export const GET_FRAME_SUCCESS = 'GET_FRAME_SUCCESS';
export const GET_FRAME_FAIL = 'GET_FRAME_FAIL';
export const REVOKE_FRAME_URL = 'REVOKE_FRAME_URL';

export interface GetFrame {
  type: typeof GET_FRAME;
}

export interface GetFrameSuccess {
  type: typeof GET_FRAME_SUCCESS;
  frameBuffer: ArrayBuffer;
}

export interface GetFrameFail {
  type: typeof GET_FRAME_FAIL;
}

export interface RevokeFrameURL {
  type: typeof REVOKE_FRAME_URL;
}

export type CaptureActionTypes =
  | GetFrame
  | GetFrameSuccess
  | GetFrameFail
  | RevokeFrameURL;
