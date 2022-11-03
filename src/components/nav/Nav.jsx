import AdbIcon from '@mui/icons-material/Adb';

import { AppBar, Avatar, Box, Container, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import * as React from 'react';


function Nav() {
  const handleOpenUserMenu = (event) => {};

  return (
    <AppBar position="sticky">
      <img className='headerImage' src="assets/Header.png" />
    </AppBar>
  );
}

export { Nav };
