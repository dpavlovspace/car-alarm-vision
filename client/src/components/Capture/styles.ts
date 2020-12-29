import styled from 'styled-components';

export const CaptureImgContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  background-color: #000;
  font-size: 0;
  pointer-events: none;
`;

export const CaptureImg = styled.img`
  position: relative;
  max-width: 100%;
  max-height: 500px;
  height: auto;
  text-align: center;
  margin: 0;
  padding: 0;
  user-select: none;
`;

export const CaptureEmpty = styled.div`
  position: relative;
  display: inline-block;
  font-size: 0;
  margin: 0 auto;
  text-align: center;
  background-color: #2c3e50;
  height: 100%;
  width: auto;
`;

export const CaptureEmptyIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  fill: #ecf0f1;
`;

export const CaptureOnlineCount = styled.span`
  position: absolute;
  right: 0.7rem;
  bottom: 0.5rem;
  font-size: 1.3rem;
  color: #c0392b;

  svg {
    margin-right: 0.35rem;
  }
`;
