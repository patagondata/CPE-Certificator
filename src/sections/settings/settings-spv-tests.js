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
        testName: 'SPV single parameter',
        parameter: 'InternetGatewayDevice.ManagementServer.PeriodicInformInterval',
        value: '300',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'SPV multiple parameters',
        parameter: 'InternetGatewayDevice.ManagementServer.PeriodicInformInterval, InternetGatewayDevice.ManagementServer.PeriodicInformEnable ',
        value: '120, 1',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'SPV nonexistent parameter',
        parameter: 'InternetGatewayDevice.ManagementServer.test ',
        value: 'test',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'SPV branch, no object',
        parameter: 'InternetGatewayDevice.ManagementServer',
        value: 'test',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'SPV wrong data type',
        parameter: 'InternetGatewayDevice.ManagementServer.PeriodicInformInterval ',
        value: 'test',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'SPV wrong value',
        parameter: 'InternetGatewayDevice.LANDevice.1.LANHostConfigManagement',
        value: 'test',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'SPV non-writable parameter',
        parameter: 'InternetGatewayDevice.Time.CurrentLocalTime',
        value: '2020-02-22T12:14:04-04:00',
        customParameter: '',
        customValue: ''
    }
];

export default function SettingsSPVTests() {
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
                                    <TableCell>
                                        Valor Default
                                    </TableCell>
                                    <TableCell>
                                        Valor Personalizado
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((customer) => {
                                    return (
                                        <TableRow
                                            hover>
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
                                            <TableCell>
                                                {customer.value}
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
