import Head from 'next/head';
import { Alert, Box, Button, Container, Divider, Grid, Paper, Stack, SvgIcon, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import ExecutionsStatusProgressAlert from 'src/sections/executions/executions-status-progress-panel';
import ExecutionStatusTests from 'src/sections/executions/executions-status-tests';
import StopCircleIcon from '@heroicons/react/24/solid/NoSymbolIcon';
import ArrowDownOnSquareStackIcon from '@heroicons/react/24/solid/ArrowDownOnSquareStackIcon';
import BarsArrowUpIcon from '@heroicons/react/24/solid/BarsArrowUpIcon';

const Page = () => (
  <>
    <Head>
      <title>
        Detalles de la ejecución | Patagondata
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


              ALCLB3F49710 - Huawei 521</div>
          </Typography>

          <div>
            <ExecutionsStatusProgressAlert />
          </div>
          <div>
            El proceso de certificación puede tardar varios minutos en completarse, dependiendo de la cantidad de pruebas seleccionadas y la capacidad del dispositivo. 
          </div>
  
        
          <Divider />
          <div>
            <ExecutionStatusTests />
          </div>
          
          
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell align="center">
                    <Button
                      href="/executions"
                      variant="contained"
                      startIcon={(
                        <SvgIcon fontSize="small">
                          <BarsArrowUpIcon />
                        </SvgIcon>
                      )}
                    >
                      Resumen de Certificación de Dispositivos
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      startIcon={(
                        <SvgIcon fontSize="small">
                          <StopCircleIcon />
                        </SvgIcon>
                      )}
                    >
                      Detener Proceso de Certificación
                    </Button>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell align="left">
                    <Button
                      href="/assets/reports/Reporte-Detallado-ALCLB3F49710-Huawei 521.xlsx" target="_blank" download
                      variant="contained"
                      startIcon={(
                        <SvgIcon fontSize="small">
                          <ArrowDownOnSquareStackIcon />
                        </SvgIcon>
                      )}
                    >
                      Exportar Resultados
                    </Button>
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>

                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Typography variant="caption">
          
          <div>
           * Pruebas marcadas como exitosas no garantizan que el dispositivo haya pasado la certificación, ya que algunas pruebas son opcionales y no todas son necesarias para cada modelo de dispositivo.
          </div>
          <div>
            * Pruebas marcadas como fallidas requieren atención y pueden impedir que el dispositivo obtenga la certificación.
            </div>
            <div>
            * Pruebas marcadas como: <Alert severity="warning">Pendiente de ejecución/validación manual</Alert> están en espera de ejecución/revisión manual y no afectan el estado general de la certificación. 
          </div>
          </Typography>
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
