import Head from 'next/head';
import { Autocomplete, Box, Button, Container, Divider, Stack, SvgIcon, Tab, Table, TableCell, TableBody, TableRow, TextField, Typography } from '@mui/material';
import SettingsTestsList from 'src/sections/settings/settings-tests-list';
import SettingsPanelCustomTests from 'src/sections/settings/settings-panel-custom-tests';
import SettingsPanelBulkDataTests from 'src/sections/settings/settings-panel-bulk-data-tests';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import PencilIcon from '@heroicons/react/24/solid/PencilIcon';
import { DashboardDeviceSearch } from 'src/sections/dashboard/dashboard-device-search';
import devicesByDeviceTypeList from '../sections/dashboard/devicesByDeviceType-list';

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
             
            </div>
          </Stack>
          <Typography variant="h7">
            Configure las pruebas que desea ejecutar por cada modelo de dispositivo
          </Typography>
          <div>
            <Table sx={{ width: 540 }}>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Autocomplete
                      defaultValue="Default"
                      disablePortal
                      options={devicesByDeviceTypeList}
                      sx={{ width: 250 }}
                      renderInput={(params) => <TextField {...params} label="Modelo"
                      />}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      startIcon={(
                        <SvgIcon fontSize="small">
                          <PencilIcon />
                        </SvgIcon>
                      )}
                    >
                      Guardar Configuración
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
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
