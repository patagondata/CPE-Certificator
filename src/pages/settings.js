import Head from 'next/head';
import { Box, Button, Container, Divider, Stack, SvgIcon, Typography } from '@mui/material';
import SettingsTestsList from 'src/sections/settings/settings-tests-list';
import SettingsPanelCustomTests from 'src/sections/settings/settings-panel-custom-tests';
import SettingsPanelBulkDataTests from 'src/sections/settings/settings-panel-bulk-data-tests';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import PencilIcon from '@heroicons/react/24/solid/PencilIcon';

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
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Configuración Pruebas TR-069
              </Typography>
            </Stack>
            <div>
              <Button
                variant="contained"
                startIcon={(
                  <SvgIcon fontSize="small">
                    <PencilIcon />
                  </SvgIcon>
                )}
              >
                Guardar Cambios
              </Button>
            </div>
          </Stack>
          <Typography variant="h7">
            Seleccione cada una de las pruebas que desea ejecutar en los dispositivos y/o configure valores personalizados
          </Typography>

          <div>
            <SettingsTestsList />
          </div>
          <Divider />
          <div>
            <SettingsPanelBulkDataTests />
          </div>
          <Divider />
          <div>
            <SettingsPanelCustomTests />
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
