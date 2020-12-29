import React, { FC, useState } from 'react';

import Capture from '../components/Capture';
import Controls from '../components/Controls';
import Events from '../components/Events';

const Home: FC = () => {
  const [isShowEventsOnly, setIsShowEventsOnly] = useState(false);

  return (
    <>
      {!isShowEventsOnly && <Capture />}
      {!isShowEventsOnly && <Controls />}
      <Events onClickHeader={() => setIsShowEventsOnly(!isShowEventsOnly)} />
    </>
  );
};

export default React.memo(Home);
