import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RocketLaunchIcon from '@heroicons/react/24/solid/RocketLaunchIcon';
import { Alert, Autocomplete, IconButton, SvgIcon, TextField, Tooltip } from '@mui/material';

function createData(testName, testStatus, testResult, details) {
    return { testName, testStatus, testResult, details };
}

const rows = [
    createData('Reboot', "Pendiente de ejecución/validación manual", "warning", "Por favor ejecute la prueba y actualice el estado."),
];

export default function ExecutionsResultReboot() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" >
                            Prueba
                        </TableCell>
                        <TableCell align="left" >
                            Estatus
                        </TableCell>
                        <TableCell align="left">Detalles</TableCell>
                        <TableCell align="left" >
                            Iniciar prueba
                        </TableCell>
                        <TableCell align="left" >
                            Resultado de la Prueba
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.testName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                
                                    {row.testName}
                                
                            </TableCell>
                            <TableCell component="th" scope="row">
                                <Alert severity={row.testResult}>
                                    {row.testStatus}
                                </Alert>
                            </TableCell>
                            <TableCell align="left">
                                {row.details}
                            </TableCell>
                            <TableCell align="left">
                                <Tooltip title="Inicar Prueba">
                                    <IconButton edge="end">
                                        <a href="#">
                                            <SvgIcon>
                                                <RocketLaunchIcon/>
                                            </SvgIcon>
                                        </a>
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                            <TableCell align="left">
                                <Autocomplete
                                    defaultValue="Seleccione"
                                    disablePortal
                                    options={['Exitosa', 'Fallida', 'Pendiente de ejecución/validación manual']}
                                    sx={{ width: 200 }}
                                    renderInput={(params) => <TextField {...params} label="Resultado"
                                    />}
                                /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
