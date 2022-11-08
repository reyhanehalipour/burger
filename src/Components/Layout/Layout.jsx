import React from 'react';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import './Layout.css'
  const Layout = (props) => {
      return (
      <>
      <div>
          <Toolbar/>
      </div>

      <main className='mt'>
          {props.children}
      </main>
      </> );
  }
   
  export default Layout;