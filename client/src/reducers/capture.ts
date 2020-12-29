import { toast } from 'react-toastify';

import {
  CaptureActionTypes,
  GET_FRAME,
  GET_FRAME_FAIL,
  GET_FRAME_SUCCESS,
  REVOKE_FRAME_URL,
} from '../actions/capture.actionTypes';

interface DefaultStateI {
  frameURL: string;
}

const defaultState: DefaultStateI = {
  frameURL: null,
};

export default (
  state: DefaultStateI = defaultState,
  action: CaptureActionTypes
): DefaultStateI => {
  switch (action.type) {
    case GET_FRAME_SUCCESS: {
      const blob = new Blob([action.frameBuffer], { type: 'image/jpeg' });
      const objectURL = URL.createObjectURL(blob);
      return {
        ...state,
        frameURL: objectURL,
      };
    }
    case REVOKE_FRAME_URL:
      URL.revokeObjectURL(state.frameURL);
      return { ...state };
    case GET_FRAME_FAIL:
      toast.dark('Problems with get frame');
      return { ...state };
    case GET_FRAME:
    default:
      return { ...state };
  }
};
