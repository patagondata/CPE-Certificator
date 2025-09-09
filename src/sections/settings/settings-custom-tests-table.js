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
    Typography
} from '@mui/material';
import { Scrollbar } from 'src/components/scrollbar';
import EditIcon from '@heroicons/react/24/solid/PencilSquareIcon';
import DeleteIcon from '@heroicons/react/24/solid/ArchiveBoxXMarkIcon';
import DeleteAlertDialog from 'src/utils/DeleteAlertDialog';

const items = [
    {
        testName: 'Prueba Personalizada 1',
        parameter: 'InternetGatewayDevice.CustomParameter',
        value: '300',
        rpc: 'GetParameterValue',
        validation: 'Valor esperado=1'
    },
    {
        testName: 'Prueba Personalizada 2',
        parameter: 'N/A',
        value: 'N/A',
        rpc: 'Reboot',
        validation: 'Device Up & Running'
    },
    {
        testName: 'Prueba Personalizada 3',
        parameter: 'InternetGatewayDevice.CustomBranch.CustomParameter',
        value: '300',
        rpc: 'SetParameterValue',
        validation: 'Parameter updated'
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
                                {items.map((customer) => {
                                    return (
                                        <TableRow
                                            hover>
                                            <TableCell padding="checkbox">
                                                <Checkbox checked />
                                            </TableCell>
                                            <TableCell>
                                                {customer.testName}
                                            </TableCell>
                                            <TableCell>
                                                {customer.rpc}
                                            </TableCell>
                                            <TableCell>
                                                {customer.parameter}
                                            </TableCell>
                                            <TableCell>
                                                {customer.value}
                                            </TableCell>
                                            <TableCell>
                                                {customer.validation}
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
