import { AppBar } from '@mui/material';
import * as React from 'react';


function Nav() {

  return (
    <AppBar position="sticky">
      <img className='headerImage' src="assets/Header.png" />
    </AppBar>
  );
}

export { Nav };
