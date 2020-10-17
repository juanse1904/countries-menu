import React from 'react';

import Header from './Header';


const Layout = ({ children }) => (
  <>
    <Header />
    <div className='app'>
      { children }

    </div>
  </>
);

export default Layout;

