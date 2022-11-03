import { Avatar, Container, ImageList, ImageListItem, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';

function Ad({ item }) {

  const [count, setCount] = useState(Math.floor(Math.random() * 101));

  return (
    <Container disableGutters sx={{ background: '#fff', marginBottom: '16px' }}>
      <Container sx={{ display: 'flex', alignItems: 'center', paddingTop: '16px' }}>
        <Avatar sx={{ width: 24, height: 24 }} alt={item.seller}></Avatar>
        <Typography sx={{ marginLeft: '8px' }}>{item.seller}</Typography>
        <div className='rating'><StarIcon className='ratingIcon'/><span>{item.rating} / 5.0</span></div>
        <div className='favorite'>
          <FavoriteBorderIcon onClick={()=>setCount(count + 1)} className='favoriteIcon'/>
          <div className='favoriteCounter'>{count}</div>
        </div>
      </Container>

      <ImageList key={item.id} sx={{
        gridAutoFlow: 'column',
      }}>
        {(item.mediaUrls).map((media) => (
          <ImageListItem sx={{ width: 200, height: 235, paddingLeft: '16px' }} key={media}>
            <img style={{ borderRadius: '7%' }} src={media} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>

      <Container sx={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px' }}>
        <Typography sx={{
          maxWidth: '80%',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textAlign: 'left'
        }}>{item.title}</Typography>
        <Typography fontWeight={700}>{item.price}</Typography>
      </Container>
    </Container>
  );
}

export { Ad };
