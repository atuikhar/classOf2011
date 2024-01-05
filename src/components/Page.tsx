import { ReactNode } from 'react';

import { Box, styled } from '@mui/material';

import { Helmet } from 'react-helmet-async';

type PageProps = {
  children: ReactNode;
  title: string;
  footer?: boolean;
};

const FluidWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('xl')]: {
    width: '70%',
  },
}));

export default function Page({ children, footer, title }: PageProps) {
  return (
    <>
      <Helmet>
        <title>{`${title} | ClassOf2011`}</title>
      </Helmet>
      <Box display="flex" justifyContent="center" bgcolor="black">
        <FluidWrapper>
          <Box flex={1}>{children}</Box>
        </FluidWrapper>
      </Box>
    </>
  );
}
