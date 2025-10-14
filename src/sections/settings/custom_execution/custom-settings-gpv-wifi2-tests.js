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
    Typography,
    Autocomplete,
    TextField
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import priorityList from '../priority-list';

const items = [
    {
        testName: 'WLAN 5 GHz main status',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.Status',
        value: '300',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'WLAN 5 GHz main enable',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.Enable ',
        value: '120, 1',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'WLAN 5 GHz main channel',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.Channel',
        value: 'test',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'WLAN 5 GHz main SSID',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.SSID',
        value: 'test',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'WLAN 5 GHz main autochanel',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.AutoChannelEnable',
        value: 'test',
        customParameter: '',
        customValue: ''
    }
];

export default function CustomSettingsGPVWifi2Tests() {
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
