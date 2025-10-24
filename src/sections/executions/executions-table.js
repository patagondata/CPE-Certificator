import { format } from 'date-fns';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import {
  Box,
  ButtonBase,
  Card,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import { SeverityPill } from 'src/components/severity-pill';
import EyeIcon from '@heroicons/react/24/solid/EyeIcon';
import ExcelIcon from '@heroicons/react/24/solid/DocumentChartBarIcon';
import PDFIcon from '@heroicons/react/24/solid/DocumentTextIcon';
import { SideNavItem } from 'src/sections/executions/nav-item-execution-details';
import { ExecutionsDeviceSearch } from 'src/sections/executions/executions-devices-search';
import RocketLaunchIcon from '@heroicons/react/24/solid/RocketLaunchIcon';
import NoSymbolIcon from '@heroicons/react/24/solid/NoSymbolIcon';
import ReExecution from 'src/sections/executions/re-execution';

const statusMap = {
  incompleto: 'warning',
  completado: 'success',
  falló: 'error'
};

export const ExecutionsTable = (props) => {
  const { executions = [], sx } = props;

  return (
    <Card sx={sx}>
      <CardHeader title="Ejecuciones Recientes" />
      <Divider /> 
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Numero de Serie
                </TableCell>
                <TableCell>
                  Device Type
                </TableCell>
                <TableCell sortDirection="desc">
                  Fecha Ejecución
                </TableCell>
                <TableCell>
                  Usuario
                </TableCell>
                <TableCell>
                  Estatus
                </TableCell>
                <TableCell>
                  Tasa de Exito
                </TableCell>
                <TableCell>
                  Detalles
                </TableCell>
                <TableCell>
                  Re-Ejecutar
                </TableCell>
                <TableCell>
                  Exportar Resultados
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {executions.map((execution) => {
                const createdAt = format(execution.createdAt, 'dd/MM/yyyy hh:mm:ss');

                return (
                  <TableRow
                    hover
                    key={execution.id}
                  >
                    <TableCell>
                      {execution.sn}
                    </TableCell>
                    <TableCell>
                      {execution.customer.name}
                    </TableCell>
                    <TableCell>
                      {createdAt}
                    </TableCell>
                    <TableCell>
                      {execution.user}
                    </TableCell>
                    <TableCell>
                      <SeverityPill color={statusMap[execution.status]}>
                        {execution.status}
                      </SeverityPill>
                    </TableCell>
                    <TableCell>
                      <SeverityPill color={statusMap[execution.status]}>
                        {execution.successRate}
                      </SeverityPill>
                    </TableCell>
                    <TableCell> 
                      <Tooltip title="Ver Detalles de la Ejecución"> 
                      <SideNavItem
                        active="true"
                        disabled="false"
                        external=""
                        icon=""
                        key=""
                        path="/executions-status"
                        title=""
                      />
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      {execution.candidateToReExecute ? (
                        <Tooltip title="Re-Ejecutar Proceso de Certificación">
                        <ReExecution/>                                        
                        </Tooltip> 
                      ) : (
                        <Tooltip title="No es candidato a re-ejecución debido al estatus actual de la ejecución">
                          <span>
                            <IconButton edge="end" disabled>
                              <SvgIcon>
                                <NoSymbolIcon />
                              </SvgIcon>
                            </IconButton>
                          </span>
                        </Tooltip>
                      )}
                    </TableCell>
                    <TableCell>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Tooltip title="Exportar Archivo Excel">
                            <IconButton edge="end" href="/assets/example-files/TR_Certification_V1.1.xlsx" target="_blank" download>
                              <a href="/assets/reports/Reporte-Detallado-ALCLB3F49710-Huawei 521.xlsx" target="_blank" download>
                                <SvgIcon>
                                  <ExcelIcon />
                                </SvgIcon>
                              </a>
                            </IconButton>
                          </Tooltip>
                        </Grid>
                        <Grid item xs={6}>
                          <Tooltip title="Exportar Archivo PDF">
                            <IconButton edge="end">
                              <a href="/assets/reports/Reporte-ResumenEjecutivo-ALCLB3F49710-Huawei 521.pdf" target="_blank" download>
                                <SvgIcon>
                                  <PDFIcon />
                                </SvgIcon>
                              </a>
                            </IconButton>
                          </Tooltip>
                        </Grid>
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>      
    </Card>
  );
};

ExecutionsTable.prototype = {
  executions: PropTypes.array,
  sx: PropTypes.object
};
