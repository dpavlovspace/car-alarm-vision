import { Dispatch } from 'redux';

import socket from '../socket';
import {
  CaptureActionTypes,
  GET_FRAME,
  GET_FRAME_FAIL,
  GET_FRAME_SUCCESS,
  REVOKE_FRAME_URL,
} from './capture.actionTypes';

export const frameListener = () => async (
  dispatch: Dispatch<CaptureActionTypes>
): Promise<void> => {
  try {
    socket.on('frame', async (frameBuffer: ArrayBuffer) => {
      dispatch({ type: GET_FRAME });
      dispatch({ type: GET_FRAME_SUCCESS, frameBuffer });
      setTimeout(async () => dispatch({ type: REVOKE_FRAME_URL }), 2000);
    });
  } catch (error) {
    dispatch({ type: GET_FRAME_FAIL });
  }
};

export const destroyFrameListener = () => async (
  dispatch: Dispatch<CaptureActionTypes>
): Promise<void> => {
  await socket.off('frame');
};
