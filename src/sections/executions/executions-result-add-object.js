import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Alert, Box, CircularProgress } from '@mui/material';

function createData(testName, testResult, details) {
    return { testName, testResult, details };
}

const rows = [
    createData('Add object to unexistent branch', "warning", ""),
    createData('Add object to no multinstance branch', "warning", ""),
    createData('Add object persistence after reboot', "warning", ""),
];

export default function ExecutionsResultAddObject() {
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
                    <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            <Alert severity="success">
                                Add Object
                            </Alert>
                        </TableCell>
                        <TableCell align="left">

                        </TableCell>
                    </TableRow>
                    {rows.map((row) => (
                        <TableRow
                            key={row.testName}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Alert severity={row.testResult} icon={false} >
                                    <Box sx={{ display: 'flex' }}>
                                        <CircularProgress size="22px" color="primary" />
                                        {row.testName}
                                    </Box>
                                    
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
