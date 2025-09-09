import Head from 'next/head';
import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import SettingsTestsList from 'src/sections/settings/settings-tests-list';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import RocketLaunchIcon from '@heroicons/react/24/solid/RocketLaunchIcon';


const Page = () => (
  <>
    <Head>
      <title>
        Configuración Pruebas | Patagondata
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
          <Typography variant="h4">
            <div>
              Configuración Personalizada para:

              ALCLB3F49710 - Huawei 521</div>
          </Typography>
          <Typography variant="h7">
            Seleccione cada una de las pruebas que desea ejecutar en los dispositivos y/o configure valores personalizados
          </Typography>
          <div>
          </div>
          <Divider />
          <div>
            <SettingsTestsList/>
          </div>
          <Divider />
          <div>
          </div>
          <div>
            <Button
             
              variant="contained"
            >
              Iniciar Proceso de Certificación
            </Button>
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
