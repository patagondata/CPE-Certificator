import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Autocomplete, Card, InputAdornment, OutlinedInput, SvgIcon, Table, TableBody, TableRow, TextField, TableCell, CardHeader, Button } from '@mui/material';
import devicesDashboardList from './devices-list';
import devicesByDeviceTypeList from './devicesByDeviceType-list';
import NewExecution from 'src/sections/executions/new-execution';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';

export const DashboardDeviceSearch = () => (
  <Card sx={{ p: 0, fontWeight: 'bold' }} >
    <CardHeader title="Buscar Dispositivo:" />    
    <Table sx={{ my: 1, width: 1200 }}>
      <TableBody>
        <TableRow>
          <TableCell>
            <Autocomplete
              defaultValue="Huawei 521"
              disablePortal
              options={devicesByDeviceTypeList}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Modelo"
              />}
            />
          </TableCell>
          <TableCell>
            <Autocomplete
              defaultValue="ALCLB3F49710"
              disablePortal
              options={devicesDashboardList}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Numero de Serie"
              />}
            />
          </TableCell>
          <TableCell sx={{ my: 1, width: 380 }}>
            <NewExecution/>
          </TableCell>          
          <TableCell></TableCell>                    
          <TableCell align="right">
            <Button
            href='/assets/reports/Reporte-ResumenGeneral-ALCLB3F49710-Huawei 521.pdf' download
            target='_blank'            
            sx={{ width: 200 }} 
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Exportar Reporte
                  </Button>
          </TableCell>
        </TableRow>       
      </TableBody>
    </Table>
  </Card>
);
