import Head from 'next/head';
import { Box, Button, Container, Divider, Unstable_Grid2 as Grid, Link, Stack, SvgIcon, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { ExecutionsTable } from 'src/sections/executions/executions-table';
import NewExecution from 'src/sections/executions/new-execution';
import { DeviceTypeSearch } from 'src/sections/devices/devices-search';

const now = new Date();

const Page = () => (
  <>
    <Head>
      <title>
        Certificaciones | Patagondata
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
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Certificación de Dispositivos TR-069
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={0}
              >
              </Stack>
            </Stack>
            <div>
              <NewExecution />
            </div>
          </Stack>
          <Grid
            container
            spacing={0}
          >
            <Grid
              xs={12}
              md={12}
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
                    createdAt: 1555016400000,
                    status: 'En Progreso',
                    sn: 'ALCLB3F49710',
                    user: 'David Flores',
                    successRate: '28%'
                  },
                  {
                    id: '9eaa1c7dd4433f413c308ce2',
                    ref: 'DEV1048',
                    customer: {
                      name: 'Sagecomm 123'
                    },
                    createdAt: 1555016400000,
                    status: 'completado',
                    sn: 'FSH210500076',
                    user: 'David Flores',
                    successRate: '80%'
                  },
                  {
                    id: '01a5230c811bd04996ce7c13',
                    ref: 'DEV1047',
                    customer: {
                      name: 'Motorola 532'
                    },
                    createdAt: 1554930000000,
                    status: 'incompleto',
                    sn: '3FE75113BAAB',
                    user: 'Pablo Navarro',
                    successRate: '55%'
                  },
                  {
                    id: '1f4e1bd0a87cea23cdb83d18',
                    ref: 'DEV1046',
                    customer: {
                      name: 'Huawei 123'
                    },
                    createdAt: 1554757200000,
                    status: 'falló',
                    sn: 'ALCLFBEB6218',
                    user: 'David Flores',
                    successRate: '10%'
                  },
                  {
                    id: '9f974f239d29ede969367103',
                    ref: 'DEV1045',
                    customer: {
                      name: 'Nokia as31'
                    },
                    createdAt: 1554670800000,
                    status: 'completado',
                    sn: 'ALCLB3CEEF97',
                    user: 'Pablo Navarro',
                    successRate: '95%'
                  },
                  {
                    id: 'ffc83c1560ec2f66a1c05596',
                    ref: 'DEV1044',
                    customer: {
                      name: 'ZTE 123'
                    },
                    createdAt: 1554670800000,
                    status: 'completado',
                    sn: '3TG01454AAAA',
                    user: 'David Flores',
                    successRate: '100%'
                  }
                ]}
                sx={{ height: '100%' }}
              />
            </Grid>
          </Grid>
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
