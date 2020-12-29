import styled from 'styled-components';

export const ControlsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #ecf0f1;
`;

export const Control = styled.button<{ background: string }>`
  display: inline-flex;
  align-items: center;
  border-radius: 0.3rem;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.7rem 1.35rem;
  color: #fff;
  margin: 0 0.5rem;
  min-height: 2.6rem;
  cursor: pointer;
  text-decoration: none;
  background-color: ${({ background }) => {
    if (background === 'green') {
      return '#1abc9c';
    }
    if (background === 'red') {
      return '#e74c3c';
    }
    if (background === 'asphalt') {
      return '#34495e';
    }
    return '#95a5a6';
  }};
  transition: background-color 0.2s ease;

  svg {
    margin-right: 0.35rem;
  }

  &:hover {
    background-color: ${({ background }) => {
      if (background === 'green') {
        return '#1f9a82';
      }
      if (background === 'red') {
        return '#b13f33';
      }
      if (background === 'asphalt') {
        return '#293848';
      }
      return '#95a5a6';
    }};
    transition: background-color 0.2s ease;
  }

  &:disabled {
    background-color: #ccc;
  }
`;
