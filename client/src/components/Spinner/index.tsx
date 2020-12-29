import React, { FC } from 'react';

import { SpinnerCircle, SpinnerContainer, SpinnerIcon } from './styles';

const Spinner: FC<{ show: boolean }> = ({ show }) => (
  <SpinnerContainer show={show}>
    <SpinnerIcon viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <SpinnerCircle
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </SpinnerIcon>
  </SpinnerContainer>
);

export default React.memo(Spinner);
