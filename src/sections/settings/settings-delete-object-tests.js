import * as React from 'react';
import { useCallback } from 'react';
import Box from '@mui/material/Box';
import {
    Card, Checkbox, Divider, FormControlLabel, Stack, Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';

const items = [
    {
        testName: 'Delete object',
        parameter: 'InternetGatewayDevice.Layer3Forwarding.Forwarding.1',
        value: '300',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'Delete object in unexistent branch',
        parameter: 'InternetGatewayDevice.test.1',
        value: '120, 1',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'Delete object in no multinstance branch',
        parameter: 'InternetGatewayDevice.1',
        value: 'test',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'Delete object persistence after reboot',
        parameter: 'InternetGatewayDevice.ManagementServer.',
        value: 'test',
        customParameter: '',
        customValue: ''
    }
];

export default function SettingsDeleteObjectTests() {
    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
        },
        []
    );

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <Scrollbar>
                    <Box sx={{ minWidth: 800 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox checked/>
                                    </TableCell>
                                    <TableCell>
                                        Prueba
                                    </TableCell>
                                    <TableCell>
                                        Parametro Default
                                    </TableCell>
                                    <TableCell>
                                        Parametro Personalizado
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((customer) => {
                                    return (
                                        <TableRow
                                            hover key={customer.parameter}> 
                                            <TableCell padding="checkbox">
                                                <Checkbox checked/>
                                            </TableCell>
                                            <TableCell>
                                                {customer.testName}
                                            </TableCell>
                                            <TableCell>
                                                {customer.parameter}
                                            </TableCell>
                                            <TableCell>
                                                <input></input>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Box>
                </Scrollbar>

            </Card>
        </form>
    );
}
