import * as React from 'react';
import { useCallback } from 'react';
import Box from '@mui/material/Box';
import {
    Card, Checkbox, Divider, FormControlLabel, IconButton, Stack, SvgIcon, Table,
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
import EditIcon from '@heroicons/react/24/solid/PencilSquareIcon';
import DeleteIcon from '@heroicons/react/24/solid/ArchiveBoxXMarkIcon';
import DeleteAlertDialog from 'src/utils/DeleteAlertDialog';
import priorityList from './priority-list';

const items = [
    {
        testName: 'Cambiar SSID',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.SSID',
        value: 'NewSSID',
        rpc: 'SetParameterValue',
        validation: 'Valor esperado=200',
        priority: 'Alta',
        test_group: 'Reconfiguración Smart WiFi',
        executionType: 'Automática'
    },
    {
        testName: 'Cambiar SSID - caracteres especiales',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.SSID',
        value: '***NewSSID###',
        rpc: 'SetParameterValue',
        validation: 'Valor esperado=200',
        priority: 'Alta',
        test_group: 'Reconfiguración Smart WiFi',
        executionType: 'Automática'
    },
    {
        testName: 'Cambiar SSID - longitud extrema',
        parameter: 'InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.SSID',
        value: 'New SSID with a very long name exceeding normal length',
        rpc: 'SetParameterValue',
        validation: 'Valor esperado=200',
        priority: 'Alta',
        test_group: 'Reconfiguración Smart WiFi',
        executionType: 'Automática'
    },
    {
        testName: 'Custom Test 2',
        parameter: 'N/A',
        value: 'N/A',
        rpc: 'Reboot',
        validation: 'Device Up & Running',
        priority: 'Media',
        test_group: 'Ninguno',
        executionType: 'Manual'
    },
    {
        testName: 'Custom Test 3',
        parameter: 'InternetGatewayDevice.CustomBranch.CustomParameter',
        value: '300',
        rpc: 'SetParameterValue',
        validation: 'Parameter updated',
        priority: 'Baja',
        test_group: 'Custom Group',
        executionType: 'Automática'
    }
];

export default function SettingsCustomTests() {
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
                                        Prioridad
                                    </TableCell>
                                    <TableCell>
                                        Tipo de Ejecución
                                    </TableCell>
                                    <TableCell>
                                        Grupo de Pruebas
                                    </TableCell>
                                    <TableCell>
                                        RPC
                                    </TableCell>
                                    <TableCell>
                                        Parametro
                                    </TableCell>
                                    <TableCell>
                                        Valor
                                    </TableCell>
                                    <TableCell>
                                        Validación
                                    </TableCell>
                                    <TableCell>
                                        Editar
                                    </TableCell>
                                    <TableCell>
                                        Eliminar
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((customTest) => {
                                    return (
                                        <TableRow
                                            hover key={customTest.parameter}>
                                            <TableCell padding="checkbox">
                                                <Checkbox checked />
                                            </TableCell>
                                            <TableCell>
                                                {customTest.testName}
                                            </TableCell>
                                            <TableCell>                                            
                                                {customTest.priority}
                                            </TableCell>
                                            <TableCell>                                            
                                                {customTest.executionType}
                                            </TableCell>
                                            <TableCell>                                            
                                                {customTest.test_group}
                                            </TableCell>
                                            <TableCell>
                                                {customTest.rpc}
                                            </TableCell>
                                            <TableCell>
                                                {customTest.parameter}
                                            </TableCell>
                                            <TableCell>
                                                {customTest.value}
                                            </TableCell>
                                            <TableCell>
                                                {customTest.validation}
                                            </TableCell>
                                            <TableCell>
                                                <IconButton edge="end">
                                                    <SvgIcon>
                                                        <EditIcon />
                                                    </SvgIcon>
                                                </IconButton>
                                            </TableCell>
                                            <TableCell>
                                                <DeleteAlertDialog/>
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
