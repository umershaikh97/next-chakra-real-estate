import { ButtonProps, FlexProps, TextProps } from '@chakra-ui/react';

export const bannerWrapperStyles: FlexProps = {
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  margin: 10,
};

export const purposeTextStyles: TextProps = {
  textTransform: 'uppercase',
  fontSize: 'sm',
  fontWeight: 'medium',
};

export const titleTextStyles: TextProps = {
  fontSize: '3xl',
  fontWeight: 'bold',
};

export const descTextStyles: TextProps = {
  fontSize: 'lg',
  paddingTop: 3,
  paddingBottom: 3,
};

export const exploreButtonStyles: ButtonProps = {
  fontSize: 'xl',
  background: 'blue.300',
};
