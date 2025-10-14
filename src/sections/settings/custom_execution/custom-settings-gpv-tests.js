import * as React from 'react';
import { useCallback } from 'react';
import Box from '@mui/material/Box';
import {
    Autocomplete,
    Card, Checkbox, Divider, FormControlLabel, Slider, Stack, Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import priorityList from '../priority-list';

const items = [
    {
        testName: 'GPV single parameter',
        parameter: 'InternetGatewayDevice.ManagementServer.PeriodicInformInterval',
        value: '300',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'GPV multiple parameters',
        parameter: 'InternetGatewayDevice.ManagementServer.PeriodicInformInterval, InternetGatewayDevice.ManagementServer.PeriodicInformEnable ',
        value: '120, 1',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'GPV branch',
        parameter: 'InternetGatewayDevice. ',
        value: 'test',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'GPV full tree',
        parameter: 'InternetGatewayDevice.ManagementServer.',
        value: 'test',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'GPV full tree',
        parameter: 'InternetGatewayDevice.test',
        value: 'test',
        customParameter: '',
        customValue: ''
    }
];

export default function CustomSettingsGPVTests() {
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
                                        <Checkbox checked />
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
                                                <Checkbox checked />
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
