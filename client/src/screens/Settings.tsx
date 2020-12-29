import React, { ChangeEvent, FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getSettings,
  loadingDone,
  loadingStart,
  setSettings,
} from '../actions/common';
import { Settings } from '../actions/common.actionTypes';
import { AppState } from '../store';
import {
  SettingsBody,
  SettingsCheckbox,
  SettingsCheckboxIcon,
  SettingsCheckboxInput,
  SettingsContainer,
  SettingsHeader,
  SettingsTitle,
} from './Settings.style';

const Settings: FC = () => {
  const dispatch = useDispatch();
  const { settings } = useSelector((state: AppState) => state.common);
  const { debug, compress } = settings;

  useEffect(() => {
    dispatch(getSettings());
  }, []);

  useEffect(() => {
    dispatch(loadingDone());

    return () => {
      dispatch(loadingStart());
    };
  }, []);

  const updateSettings = (s: Settings) => {
    dispatch(setSettings(s));
  };

  const updateDebug = (event: ChangeEvent<HTMLInputElement>) => {
    updateSettings({ ...settings, debug: !debug });
  };

  const updateCompress = (event: ChangeEvent<HTMLInputElement>) => {
    updateSettings({ ...settings, compress: !compress });
  };

  return (
    <SettingsContainer>
      <SettingsHeader>
        <SettingsTitle>Settings</SettingsTitle>
      </SettingsHeader>
      <SettingsBody>
        <SettingsCheckbox htmlFor="debug">
          <SettingsCheckboxInput
            type="checkbox"
            id="debug"
            checked={debug}
            onChange={updateDebug}
          />
          <SettingsCheckboxIcon />
          Debug Mode
        </SettingsCheckbox>
        <SettingsCheckbox htmlFor="compress">
          <SettingsCheckboxInput
            type="checkbox"
            id="compress"
            checked={compress}
            onChange={updateCompress}
          />
          <SettingsCheckboxIcon />
          Compress Image
        </SettingsCheckbox>
      </SettingsBody>
    </SettingsContainer>
  );
};

export default Settings;
