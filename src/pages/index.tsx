import type { NextPage } from 'next';
import { Box } from '@chakra-ui/react';
import { Banner } from '@/components';

const Home: NextPage = () => {
  return (
    <Box>
      <Banner
        purpose='Rent a Home'
        title1='Rental Homes for'
        title2='Everyone'
        desc1=' Explore from Apartments, builder floors, villas'
        desc2='and more'
        buttonText='Explore Renting'
        link='/search?purpose=for-rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
    </Box>
  );
};

export default Home;
