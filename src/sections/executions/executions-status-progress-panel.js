import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Stack from '@mui/material/Stack';
import { Box, CircularProgress, LinearProgress } from '@mui/material';

export default function ExecutionsStatusProgressAlert() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Box sx={{ width: '100%' }}>
        <Alert variant="outlined" severity="info">
        Proceso de Certificación en Progreso
      </Alert>
        <LinearProgress color="success" />
      </Box>
      

    </Stack>
  );
}
