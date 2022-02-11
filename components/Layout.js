import React from 'react';
import Footer from './Footer';
import Header from './Header';

function Layout ({children, standalone}) {
    return (
    <>
      { !standalone &&  <Header /> }
      <main>{children}</main>
      {!standalone && <Footer />}
    </>
    );
}

export default Layout;