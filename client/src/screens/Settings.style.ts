import styled from 'styled-components';

export const SettingsContainer = styled.div`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  overflow: hidden;
`;

export const SettingsHeader = styled.div`
  background-color: #707b7c;
  padding: 0.9rem 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #7f8c8d;
    transition: background-color 0.2s ease;
  }
`;

export const SettingsTitle = styled.h1`
  color: #fff;
  text-align: center;
  height: auto;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const SettingsBody = styled.div`
  padding: 0.9rem 0.9rem;
  display: flex;
  flex-direction: column;
`;

export const SettingsCheckbox = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const SettingsCheckboxIcon = styled.span`
  position: relative;
  display: inline-block;
  background-color: #fff;
  top: -0.1rem;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
  border-radius: 0.1rem;

  &:after {
    content: '';
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    right: 0.2rem;
    bottom: 0.2rem;
    background-color: #fff;
    transition: background-color 0.2s ease;
  }
`;

export const SettingsCheckboxInput = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  z-index: -1;
  pointer-events: none;

  &:checked ~ ${SettingsCheckboxIcon}:after {
    background-color: #3f3f3f;
    transition: background-color 0.2s ease;
  }
`;
