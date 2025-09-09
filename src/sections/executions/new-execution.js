import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Autocomplete, SvgIcon } from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import devicesExecutionList from './executions-devices-list';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import RocketLaunchIcon from '@heroicons/react/24/solid/RocketLaunchIcon';
import { SideNavItem } from 'src/sections/executions/nav-item-execution-new';

export default function NewExecution() {
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

            <Autocomplete
              defaultValue="ALCLB3F49710"
              disablePortal
              options={devicesExecutionList}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Numero de Serie"
              />}
            />

          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" form="subscription-form">
            <SideNavItem
              active="true"
              disabled="false"
              external=""
              icon=""
              key=""
              path="/executions-status"
              title="Iniciar Certificación"
            />
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
