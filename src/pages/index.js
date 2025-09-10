import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewLatestExecutions } from 'src/sections/overview/overview-latest-executions';
import { OverviewTraffic } from 'src/sections/overview/overview-pastel-chart';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import { DashboardDeviceSearch } from 'src/sections/dashboard/dashboard-device-search';

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
        Resumen | Patagondata
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          xs={12}
          sm={6}
          lg={3}
        >
          <DashboardDeviceSearch />
        </Grid>
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            lg={8}
          >
            <OverviewLatestExecutions
              chartSeries={[
                {
                  name: 'Este Día',
                  data: [1, 1, 5, 2, 1, 3, 2]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={4}
          >
            <OverviewTraffic
              chartSeries={[80, 5, 15]}
              labels={['Exitosas', 'Pendientes', 'Fallidas']}
              sx={{ height: '100%' }}
            />
          </Grid>

        </Grid>
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
