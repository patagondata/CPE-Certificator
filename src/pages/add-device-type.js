import Head from 'next/head';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { SettingsNotifications } from 'src/sections/settings/settings-notifications';
import { DeviceTypeAdd } from 'src/sections/device_types/device-type-add';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { AccountProfile } from 'src/sections/account/account-profile';
import { Logo } from 'src/components/DeviceType_img';

const Page = () => (
  <>
    <Head>
      <title>
        Add Device Type | Patagondata
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>
          <div>
            <Typography variant="h4">
              Crear un Nuevo Device Type
            </Typography>
          </div>
          <div>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
                lg={6}
              >
                <DeviceTypeAdd />
              </Grid>
              <Grid
                xs={12}
                md={6}
                lg={6}
              >
                <Logo />
              </Grid>
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
