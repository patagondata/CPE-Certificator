import Head from 'next/head';
import { Autocomplete, Box, Button, Container, Divider, Stack, SvgIcon, Tab, Table, TableCell, TableBody, TableRow, TextField, Typography } from '@mui/material';
import SettingsCustomTestsList from 'src/sections/settings/settings-custom-tests-list';
import SettingsPanelCustomTests from 'src/sections/settings/settings-panel-custom-tests';
import SettingsPanelBulkDataTests from 'src/sections/settings/settings-panel-bulk-data-tests';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import PencilIcon from '@heroicons/react/24/solid/PencilIcon';
import { DashboardDeviceSearch } from 'src/sections/dashboard/dashboard-device-search';
import devicesByDeviceTypeList from '../sections/dashboard/devicesByDeviceType-list';
import { SideNavItem } from 'src/layouts/dashboard/side-nav-item';
import RocketLaunchIcon from '@heroicons/react/24/solid/RocketLaunchIcon';
import BarsArrowUpIcon from '@heroicons/react/24/solid/BarsArrowUpIcon';
import StopCircleIcon from '@heroicons/react/24/solid/NoSymbolIcon';


const Page = () => (
  <>
    <Head>
      <title>
        Pruebas Personalizadas | Patagondata
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
                Huawei 521 - ALCLB3F49710
              </Typography>
            </Stack>
            <div>

            </div>
          </Stack>
          <div className="App" style={{ backgroundColor: "yellow" }}>
          <Typography variant="h7">
            Antes de comenzar, personalice las pruebas que desea ejecutar, una vez que haya terminado, haga click en <b>"Comenzar Certificación"</b>
          </Typography>
          </div>
          <div>
            <SettingsCustomTestsList />
          </div>
          <Divider />

          <div>
            <Table sx={{ width: 700 }}>
              <TableBody>
                <TableRow>
                  <TableCell>
                  </TableCell>
                  <TableCell>
                  </TableCell>
                  <TableCell>
                  </TableCell>
                  <TableCell>
                  </TableCell>
                  <TableCell>
                  </TableCell>
                  <TableCell>
                  </TableCell>
                  <TableCell>
                  </TableCell>
                  <TableCell>
                    <Button type="submit" form="subscription-form" 
                    variant="outlined"
                    color="success"
                    size="small"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <RocketLaunchIcon />
                      </SvgIcon>
                    )}>
                      <SideNavItem
                        active="true"
                        disabled="false"
                        external=""
                        icon=""
                        key=""
                        path="/executions-status"
                        title='Comenzar Certificación'
                      />
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      startIcon={(
                        <SvgIcon fontSize="small">
                          <StopCircleIcon />
                        </SvgIcon>
                      )}                      
                    >
                      <SideNavItem
                        active="true"
                        disabled="false"
                        external=""
                        icon=""
                        key=""
                        path="/executions"
                        title='Cancelar Proceso de Certificación'
                      />                      
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
