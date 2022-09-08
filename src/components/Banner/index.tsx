import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import type { BannerProps } from './types';
import {
  bannerWrapperStyles,
  descTextStyles,
  purposeTextStyles,
  titleTextStyles,
  exploreButtonStyles,
} from './styles';

const Banner: FC<BannerProps> = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  link,
  imageUrl,
}) => {
  return (
    <Flex {...bannerWrapperStyles}>
      <Image src={imageUrl} width={500} height={300} alt='property-banner' />
      <Box padding={5}>
        <Text {...purposeTextStyles}>{purpose}</Text>
        <Text {...titleTextStyles}>
          {title1}
          <br />
          {title2}
        </Text>
        <Text {...descTextStyles}>
          {desc1}
          <br />
          {desc2}
        </Text>
        <Button {...exploreButtonStyles}>
          <Link href={link}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default Banner;
