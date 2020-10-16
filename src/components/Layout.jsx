import React from 'react';

import Header from './Header';
import Sbar from './Sbar';

const Layout = ({ children }) => (
  <>
    <Header />
    <Sbar />
    <div className='app'>
      { children }

    </div>
  </>
);

export default Layout;

