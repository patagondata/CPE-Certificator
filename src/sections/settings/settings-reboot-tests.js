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
        testName: 'Reboot',
        parameter: 'InternetGatewayDevice.Layer3Forwarding.Forwarding.',
        value: '300',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'Reboot response',
        parameter: 'InternetGatewayDevice.test',
        value: '120, 1',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'Informs boot and M reboot',
        parameter: 'InternetGatewayDevice.',
        value: 'test',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'Command key',
        parameter: 'InternetGatewayDevice.ManagementServer.',
        value: 'test',
        customParameter: '',
        customValue: ''
    }
];

export default function SettingsRebootTests() {
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
