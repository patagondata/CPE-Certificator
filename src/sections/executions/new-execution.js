import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete, SvgIcon, Table, TableBody, TableRow, TableCell, Switch } from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import devicesExecutionList from './executions-devices-list';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import RocketLaunchIcon from '@heroicons/react/24/solid/RocketLaunchIcon';
import { SideNavItem } from 'src/sections/executions/nav-item-execution-new';
import devicesByDeviceTypeList from '../dashboard/devicesByDeviceType-list';

export default function NewExecution() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    //setUpdated(text);
    //alert('hola')
  };

  const [checked2, setChecked2] = React.useState(true);

  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
    //setUpdated(text);
    //alert('hola')
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
  };

  return (
    <React.Fragment>


      <Button
        startIcon={(
          <SvgIcon fontSize="small">
            <RocketLaunchIcon />
          </SvgIcon>
        )}
        variant="contained"
        onClick={handleClickOpen}
      >
        Iniciar Nuevo Proceso de Certificación
      </Button>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Certificación de dispositivos</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para ejecutar un nuevo set de pruebas, por favor elija un dispositivo.
          </DialogContentText>
          <form onSubmit={handleSubmit} id="subscription-form">

            <Table sx={{ my: 2, width: 250 }}>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Autocomplete
                      defaultValue="Huawei 521"
                      disablePortal
                      options={devicesByDeviceTypeList}
                      sx={{ width: 230 }}
                      renderInput={(params) => <TextField {...params} label="Modelo"
                      />}
                    />
                  </TableCell>
                  <TableCell>
                    <Autocomplete
                      defaultValue="ALCLB3F49710"
                      disablePortal
                      options={devicesExecutionList}
                      sx={{ width: 230 }}
                      renderInput={(params) => <TextField {...params} label="Numero de Serie"
                      />}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

          </form>
          <DialogContentText>
            Desea utilizar la plantilla Generica de pruebas?
            <Switch
              checked={checked}
              onChange={handleChange}
              slotProps={{ input: { 'aria-label': 'controlled' } }}
            />
          </DialogContentText>
          <DialogContentText>
            Desea personalizar el conjunto de pruebas a ejecutar?
            <Switch
              checked={checked2}
              onChange={handleChange2}
              slotProps={{ input: { 'aria-label': 'controlled' } }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" form="subscription-form" hidden="true">
            <SideNavItem
              active="true"
              disabled="false"
              external=""
              icon=""
              key=""
              path="/custom-execution"
              title="Continuar"
            />
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
