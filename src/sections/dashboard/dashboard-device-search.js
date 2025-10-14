import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Autocomplete, Card, InputAdornment, OutlinedInput, SvgIcon, Table, TableBody, TableRow, TextField, TableCell } from '@mui/material';
import devicesDashboardList from './devices-list';
import devicesByDeviceTypeList from './devicesByDeviceType-list';

export const DashboardDeviceSearch = () => (
  <Card sx={{ p: 2, fontWeight: 'bold' }}>
    Buscar Dispositivo:
    <Table sx={{ my: 2, width: 250 }}>
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
        </TableRow>
      </TableBody>
    </Table>
  </Card>
);
