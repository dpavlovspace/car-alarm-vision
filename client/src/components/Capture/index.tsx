import React, { FC, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { destroyFrameListener, frameListener } from '../../actions/capture';
import { loadingDone, loadingStart } from '../../actions/common';
import { AppState } from '../../store';
import {
  CaptureEmpty,
  CaptureEmptyIcon,
  CaptureImg,
  CaptureImgContainer,
  CaptureOnlineCount,
} from './styles';

const Capture: FC = () => {
  const dispatch = useDispatch();
  const { frameURL } = useSelector((state: AppState) => state.capture);
  const { online, loading } = useSelector((state: AppState) => state.common);

  useEffect(() => {
    dispatch(frameListener());

    return () => {
      dispatch(destroyFrameListener());
    };
  }, []);

  useEffect(() => {
    if (frameURL === null) {
      dispatch(loadingStart());
    } else if (loading) {
      dispatch(loadingDone());
    }
  }, [frameURL]);

  return (
    <CaptureImgContainer>
      <CaptureEmpty>
        <CaptureEmptyIcon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -87 432 432"
        >
          <path d="M278.90625 0H30C13.4375.0195312.0195312 13.4375 0 30v197.421875c.0195312 16.5625 13.4375 29.980469 30 30h248.90625c16.558594-.019531 29.980469-13.4375 30-30V30c-.019531-16.5625-13.441406-29.9804688-30-30zm0 0M328.90625 169.800781L432 226.085938V31.980469L328.90625 88.265625zm0 0" />
        </CaptureEmptyIcon>
        {!loading && frameURL && (
          <CaptureImg
            src={frameURL}
            onError={() => dispatch(loadingStart())}
            onLoad={() => loading && dispatch(loadingDone())}
          />
        )}
      </CaptureEmpty>
      <CaptureOnlineCount>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 415.744 415.744"
          fill="#c0392b"
        >
          <defs />
          <path d="M207.872 0c-53.76 0-97.28 43.52-97.28 97.28s43.52 97.28 97.28 97.28 97.28-43.52 97.28-97.28S261.632 0 207.872 0zM245.76 205.824h-75.776c-76.288 0-138.24 61.952-138.24 138.24v56.32c0 8.704 6.656 15.36 15.36 15.36H368.64c8.704 0 15.36-6.656 15.36-15.36v-56.32c0-76.288-61.952-138.24-138.24-138.24z" />
        </svg>
        {online}
      </CaptureOnlineCount>
    </CaptureImgContainer>
  );
};

export default React.memo(Capture);
