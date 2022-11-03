import { Container } from '@mui/material';
import { Ad } from '../components/ad/Ad';
import data from '../feedMockData.json';

function FeedPage() {
  return (
    <Container sx={{ background: '#F7F7F6' }}>
      {data.items.map((item) => <Ad key={item.id} item={item} />)}
    </Container>
  );
}

export { FeedPage };
