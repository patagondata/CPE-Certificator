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
        testName: 'Reboot',
        parameter: 'InternetGatewayDevice.Layer3Forwarding.Forwarding.',
        value: '300',
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
                                                <Autocomplete
                                                    defaultValue="Alta"
                                                    options={priorityList}
                                                    sx={{ width: 250 }}
                                                    renderInput={(params) => <TextField {...params}
                                                        label="Prioridad"
                                                    />}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <Autocomplete
                                                    defaultValue="Manual"
                                                    options={['Automática', 'Manual']}
                                                    sx={{ width: 250 }}
                                                    renderInput={(params) => <TextField {...params}
                                                        label="Tipom de ejecución"
                                                    />}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <TextField
                                                    
                                                    name="timeout"
                                                    label="Tiempo de espera (ms)"
                                                    value="300000"
                                                />
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
