import { ReactElement, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Typography } from '@mui/material';
// layouts
import Layout from '../src/layouts';
import { Page } from '../src/components';
import { flattenArray } from '@lmf/helpers';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(15, 2.5),
  [theme.breakpoints.up('sm')]: {
    height: '100vh',
  },
}));

// ----------------------------------------------------------------------

export default function HomePage() {

  useEffect(() => {
    console.log(flattenArray([1, 2]));
  }, []);

  return (
    <Page title="Home Page">
      <RootStyle>
        <Stack alignItems="center" sx={{ maxWidth: 480 }}>
          <Typography variant="h3" paragraph>
            NextJS Starter
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            A boilerplate for NextJS projects.
          </Typography>
        </Stack>
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout simpleHeader disabledFooter>
      {page}
    </Layout>
  );
};
