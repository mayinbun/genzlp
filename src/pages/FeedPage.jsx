import { Container } from '@mui/material';
import { Ad } from '../components/ad/Ad';
import { B2cads } from '../components/b2cads/B2cads';
import data from '../feedMockData.json';

function FeedPage() {
  const c2cAds = data.items.filter((item) => item.type === 'C2C');
  const b2cAds = data.items
    .filter((item) => item.type === 'B2C')

  return (
    <Container sx={{ background: '#F7F7F6' }}>
      {c2cAds.map((item, i) => {
        return i === 2 ? <B2cads key={i} items={b2cAds} /> : <Ad key={item.id} item={item} />
      })}
    </Container>
  );
}

export { FeedPage };
