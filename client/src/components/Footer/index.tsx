import React, { FC } from 'react';

import { FooterContainer } from './styles';

const Footer: FC = () => {
  return <FooterContainer>{`Build ${process.env.BUILD}`}</FooterContainer>;
};

export default Footer;
