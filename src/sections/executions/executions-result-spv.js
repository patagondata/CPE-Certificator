import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert } from '@mui/material';

function createData(testName, testResult, details, parameter, value) {
    return { testName, testResult, details, parameter, value };
}

const rows = [
    createData('SPV single parameter', "success", "", "InternetGatewayDevice.ManagementServer.PeriodicInformInterval", "300"),
    createData('SPV multiple parameters', "success", "", "InternetGatewayDevice.ManagementServer.PeriodicInformInterval, InternetGatewayDevice.ManagementServer.PeriodicInformEnable", "120, 1"),
    createData('SPV nonexistent parameter', "success", "", "InternetGatewayDevice.ManagementServer.test", "test"),
    createData('SPV branch, no object', "error", "NBIOperationResult - STATUS_ABORTED - Device raise an unexpected behaviour", "InternetGatewayDevice.ManagementServer", "test"),
    createData('SPV wrong data type', "success", "", "InternetGatewayDevice.ManagementServer.PeriodicInformInterval", "test"),
    createData('SPV wrong value', "success", "", "InternetGatewayDevice.LANDevice.1.LANHostConfigManagement", "test"),
    createData('SPV non-writable parameter', "success", "", "InternetGatewayDevice.Time.CurrentLocalTime", "2020-02-22T12:14:04-04:00")
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
            <TableCell align="left">
                Valor
            </TableCell>
            <TableCell align="left">
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
                                {row.value}
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
