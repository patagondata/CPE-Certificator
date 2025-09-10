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
        testName: 'Habilitar Wifi',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.Enable',
        value: '1',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'Deshabilitar Wifi',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.Enable ',
        value: '0',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'Cambiar SSID',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.SSID',
        value: 'MyWifiNetwork5G',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'Cambiar Canal',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.2.Channel',
        value: '110',
        customParameter: '',
        customValue: ''
    }
];

export default function SettingsSPVWifi1Tests() {
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
