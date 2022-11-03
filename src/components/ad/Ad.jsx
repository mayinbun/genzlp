import { Avatar, Container, ImageList, ImageListItem, Typography } from '@mui/material';

function Ad({ item }) {
  return (
    <>
      <Container disableGutters sx={{ display: 'flex', alignItems: 'center', paddingTop: '16px' }}>
        <Avatar sx={{ width: 24, height: 24 }} alt={item.seller}></Avatar>
        <Typography sx={{ marginLeft: '8px' }}>{item.seller}</Typography>
      </Container>

      <ImageList key={item.id} sx={{
        gridAutoFlow: 'column',
        gridAutoColumns: 'minmax(160px, 1fr)'
      }}>
        {(item.mediaUrls).map((media) => (
          <ImageListItem sx={{ width: 200, height: 235 }} key={media}>
            <img src={media} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>

      <Container disableGutters>
        <Typography>{item.title}</Typography>
        <Typography>{item.price}</Typography>
      </Container>
    </>
  );
}

export { Ad };
