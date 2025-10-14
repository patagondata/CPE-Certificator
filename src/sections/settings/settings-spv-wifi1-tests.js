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
import priorityList from './priority-list';

const items = [
    {
        testName: 'Habilitar Wifi',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.Enable',
        value: '1',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'Deshabilitar Wifi',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.Enable ',
        value: '0',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'Cambiar SSID',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.SSID',
        value: 'MyWifiNetwork2.4G',
        customParameter: '',
        customValue: ''
    },
    {
        testName: 'Cambiar Canal',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.Channel',
        value: '11',
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
                                        Prioridad
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
                                                <Autocomplete
                                                    defaultValue="Alta"
                                                    disablePortal
                                                    options={priorityList}
                                                    sx={{ width: 50 }}
                                                    renderInput={(params) => <TextField {...params}
                                                    />}
                                                />
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
