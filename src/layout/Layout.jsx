/* eslint-disable react/prop-types */
import React from 'react';

import Header from './components/Header/index';
import Main from './components/Main';

export default ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
);
