import { Avatar, Box, Container, ImageList, ImageListItem, Typography } from '@mui/material';

function B2cads({ items }) {
  return (
    <Container disableGutters>
      <Typography sx={{ textAlign: 'left', fontWeight: 500 }}>Check these deals out</Typography>

      <ImageList sx={{
        gridAutoFlow: 'column',
      }}>
        {items.map((item) => {
          return (
            <ImageListItem sx={{ width: 200, height: '200px', paddingLeft: '16px', position: 'relative' }} key={item.id}>

              <Container disableGutters
                         sx={{
                           position: 'absolute',
                           bottom: 0,
                           left: 0,
                           right: 0,
                           color: 'whitesmoke',
                           background: 'linear-gradient(360deg, #000000 15.38%, rgba(0, 0, 0, 0) 89.74%)'
                         }
                         }>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '8px', paddingTop: '8px' }}>
                  <Avatar sx={{ width: 24, height: 24 }} alt={item.seller}></Avatar>
                  <Typography sx={{ marginLeft: '8px' }} fontSize={12} fontWeight={700}>{item.seller}</Typography>
                </Box>
                <Typography marginLeft={'8px'} textAlign={'left'} textOverflow={'ellipsis'} overflow={'hidden'} whiteSpace={'nowrap'}
                            fontSize={12}>{item.title}
                </Typography>
              </Container>

              <img style={{ borderRadius: '7%' }} src={item.mediaUrls[0]} alt={item.title} loading="lazy" />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Container>
  );
}

export { B2cads };
