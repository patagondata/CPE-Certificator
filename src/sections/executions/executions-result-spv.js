import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert } from '@mui/material';

function createData(testName, testResult, details) {
    return { testName, testResult, details };
}

const rows = [
    createData('SPV single parameter', "success", ""),
    createData('SPV multiple parameters', "success", ""),
    createData('SPV all data types', "success", ""),
    createData('SPV nonexistent parameter', "success", ""),
    createData('SPV branch, no object', "error", "Unexcpected response, it was expected to receive 9005 Invalid parameter name"),
    createData('SPV wrong data type', "success", ""),
    createData('SPV wrong value', "success", ""),
    createData('SPV non-writable parameter', "success", "")
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
            <TableCell align="left">Observaciones</TableCell>
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
                                {row.details}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
