import * as React from 'react';
import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
  SvgIcon,
  Switch,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup
} from '@mui/material';
import PencilIcon from '@heroicons/react/24/solid/PencilIcon';

const hdmVersions = [
  {
    value: '5.1.7',
    label: '5.1.7'
  },
  {
    value: '18.0.0',
    label: '18.0.0'
  },
  {
    value: '20.0.0',
    label: '20.0.0'
  },
  {
    value: '21.0.0',
    label: '21.0.0'
  }
];

export const AcsProfileDetails = () => {
  const [values, setValues] = useState({
    endPointUrl: 'http://hdm.dev/rest',
    endPointUser: 'nbi_user',
    endPointPassword: 'password',
    endPointExecutionTimeout: '50000',
    acsVersion: '20.0.0',
    compatibilityVersion: 'true'
  });

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );

  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: true,
  });

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="Configuración HDM:"

        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid
              container
              spacing={3}
            >
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Versión HDM"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.acsVersion}
                >
                  {hdmVersions.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Endpoint URL"
                  name="endPointUrl"
                  onChange={handleChange}
                  required
                  value={values.endPointUrl}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Endpoint User"
                  name="endPointUser"
                  onChange={handleChange}
                  required
                  value={values.endPointUser}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Enpoint Password"
                  name="endPointPassword"
                  onChange={handleChange}
                  type="password"
                  value={values.endPointPassword}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <TextField
                  fullWidth
                  label="Execution Timeout (Milliseconds)"
                  name="endPointExecutionTimeout"
                  onChange={handleChange}
                  required
                  value={values.endPointExecutionTimeout}
                />
              </Grid>
              <Grid
                xs={12}
                md={6}
              >
                <FormControl component="fieldset" variant="standard">
                  <FormLabel component="legend">hdm.nbi2.compatibility.version *</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch checked={values.compatibilityVersion} onChange={handleChange} name="hdm.nbi2.compatibility.version" />
                      }
                      label=""
                      fullWidth
                      onChange={handleChange}
                      value={values.compatibilityVersion}
                    />
                  </FormGroup>
                </FormControl>

              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
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
        </CardActions>
      </Card>
    </form>
  );
};
