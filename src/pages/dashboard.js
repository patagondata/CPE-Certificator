import Head from 'next/head';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { OverviewLatestExecutions } from 'src/sections/overview/overview-latest-executions';
import { OverviewTraffic } from 'src/sections/overview/overview-pastel-chart';
import { OverviewTotalProfit } from 'src/sections/overview/overview-total-profit';
import { CustomersSearch } from 'src/sections/customer/customers-search';
import { DashboardDeviceSearch } from 'src/sections/dashboard/dashboard-device-search';
import { ExecutionsTable } from 'src/sections/executions/executions-table';
import { success } from 'src/theme/colors';

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
            md={6}
            lg={12}
          >
            <ExecutionsTable
                            executions={[
                              {
                                id: 'f69f88012978187a6c12897f',
                                ref: 'DEV1049',
                                customer: {
                                  name: 'Huawei 521'
                                },
                                createdAt: 1761069593000,
                                status: 'En Progreso',
                                sn: 'ALCLB3F49710',
                                user: 'David Flores',
                                successRate: '28%'
                              },
                              {
                                id: '9eaa1c7dd4433f413c308ce2',
                                ref: 'DEV1048',
                                customer: {
                                  name: 'Huawei 521'
                                },
                                createdAt: 1760865754000,
                                status: 'completado',
                                sn: 'ALCLB3F49710',
                                user: 'David Flores',
                                successRate: '80%'
                              },
                              {
                                id: '01a5230c811bd04996ce7c13',
                                ref: 'DEV1047',
                                customer: {
                                  name: 'Huawei 521'
                                },
                                createdAt: 1760878793000,
                                status: 'incompleto',
                                sn: 'ALCLB3F49710',
                                user: 'Pablo Navarro',
                                successRate: '55%'
                              },
                              {
                                id: '1f4e1bd0a87cea23cdb83d18',
                                ref: 'DEV1046',
                                customer: {
                                  name: 'Huawei 521'
                                },
                                createdAt: 1760099014000,
                                status: 'falló',
                                sn: 'ALCLB3F49710',
                                user: 'David Flores',                                
                                successRate: '10%'
                              }
                            ]}
                            sx={{ height: '100%' }}
                          />
          </Grid>  
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
