import MagnifyingGlassIcon from '@heroicons/react/24/solid/MagnifyingGlassIcon';
import { Autocomplete, Card, InputAdornment, OutlinedInput, SvgIcon, TextField } from '@mui/material';
import devicesDashboardList from './devices-list';

export const DashboardDeviceSearch = () => (
  <Card sx={{ p: 2, fontWeight: 'bold' }}>
    Buscar Dispositivo:
    <Autocomplete
      defaultValue="ALCLB3F49710"
      disablePortal
      options={devicesDashboardList}
      sx={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="Numero de Serie" 
      />}
    />
  </Card>
);
