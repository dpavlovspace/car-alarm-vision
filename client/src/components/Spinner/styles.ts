import styled, { keyframes } from 'styled-components';

export const SpinnerIconRotate = keyframes`
	0% { transform: rotate(0deg); }
	100% { transform: rotate(270deg); }
`;

export const SpinnerCircleDash = keyframes`
    0% { stroke-dashoffset: 187; }
	50% {
		stroke-dashoffset: 46.75;
        transform: rotate(135deg);
    }
	100% {
		stroke-dashoffset: 187;
        transform: rotate(360deg);
    }
`;

export const SpinnerCircleColors = keyframes`
	0% { stroke: #4285F4; }
	25% { stroke: #DE3E35; }
	50% { stroke: #F7C223; }
	75% { stroke: #1B9A59; }
	100% { stroke: #4285F4; }
`;

export const SpinnerContainer = styled.div<{ show: boolean }>`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background-color: #424949;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.show ? '1' : '0')};
  visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
  pointer-events: ${(props) => (props.show ? 'auto' : 'none')};
  transition: opacity 0.2s ease, visibility 0.2s ease;
`;

export const SpinnerIcon = styled.svg`
  width: 4rem;
  height: 4rem;
  animation: ${SpinnerIconRotate} 1.4s linear infinite;
`;

export const SpinnerCircle = styled.circle`
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${SpinnerCircleDash} 1.4s ease-in-out infinite,
    ${SpinnerCircleColors} 5.6s ease-in-out infinite;
`;
