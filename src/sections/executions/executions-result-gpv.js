import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert } from '@mui/material';

function createData(testName, testResult, details, parameter) {
    return { testName, testResult, details, parameter };
}

const rows = [
    createData('GPV single parameter', "success", "", "InternetGatewayDevice.ManagementServer.PeriodicInformInterval"),
    createData('GPV multiple parameters', "success", "", "nternetGatewayDevice.ManagementServer.PeriodicInformInterval, InternetGatewayDevice.ManagementServer.PeriodicInformEnable"),
    createData('GPV Branch', "success", "", "InternetGatewayDevice."),
    createData('GPV Full tree', "error", "NBIOperationResult - STATUS_EXECUTION_TIMEOUT - Device got stuck", "InternetGatewayDevice.ManagementServer."),
    createData('GPV nonexistent parameter', "success", "", "InternetGatewayDevice.ManagementServer."),
];

export default function ExecutionsResultGPV() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
          <TableRow>
            <TableCell align="left" >
              Prueba
            </TableCell>
            <TableCell align="left">
                Parametro
            </TableCell>
            <TableCell align="left" >
                Detalles
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
                                <Alert severity={row.testResult}>
                                    {row.testName}
                                </Alert>
                            </TableCell>
                            <TableCell align="left">
                                {row.parameter}
                            </TableCell>
                            <TableCell align="left">
                                {row.details}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
