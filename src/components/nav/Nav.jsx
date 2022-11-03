import * as React from 'react';
import { AppBar } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


function Nav({showFeed, setShowFeed}) {

  return (<>
    <AppBar className='AppBar' position="sticky">
      <img alt="" className='headerImage' src="assets/Header.png" />
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
