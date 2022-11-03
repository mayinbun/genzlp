import * as React from 'react';
import { AppBar } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';

function Nav({showFeed, setShowFeed}) {

  return (<>
    <AppBar className='AppBar' position="sticky">
    <Stack direction="row" className='headerLogo'>
      <div className='headerImage'>
        <img alt="" src="assets/Header-logo.svg" />
      </div>
      <div className='icons'>
        <MenuIcon className='menuIcon' />
        <GridViewIcon className='gridIcon'/>
        <SearchIcon className='searchIcon'/>
      </div>
    </Stack>
    </AppBar>
    {showFeed && <Stack className="navigationPills" direction="row" spacing={1}>
        <Chip onClick={()=>{}} className="navigationPill selected" label="Voor jou" variant="outlined" />
        <Chip onClick={()=>{}} className="navigationPill" label="In je buurt" variant="outlined" />
        <Chip onClick={()=>setShowFeed(false)} className="navigationPill" label="Categories" variant="outlined" />
    </Stack>}
    </>
  );
}

export { Nav };
