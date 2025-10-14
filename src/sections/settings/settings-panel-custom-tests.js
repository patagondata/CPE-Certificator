import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsCustomTests from 'src/sections/settings/settings-custom-tests-table';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import rpcList from './rpc-list';
import testsGroupsList from './tests-groups-list';
import priorityList from './priority-list';
import { Autocomplete, Box, Button, Card, CardContent, Divider, Grid, SvgIcon, TextField } from '@mui/material';

export default function SettingsPanelCustomTests() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panelCustomTests-content"
                    id="panelCustomTests-header">
                    <Typography component="span" variant="h6">Gestión de Pruebas Personalizadas</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <Card>
                        <CardContent sx={{ pt: 1 }}>

                            
                            <Box sx={{ m: 1 }}>

                                <Grid
                                    container
                                    spacing={2}
                                >
                                    <Grid>
                                        <TextField
                                            sx={{ width: 390 }}
                                            label="Nombre de la Prueba"
                                            name="name"
                                            value="Cambiar SSID - caracteres especiales"
                                        />
                                    </Grid>
                                    <Grid>
                                        <Autocomplete
                                                    defaultValue="Alta"
                                                    disablePortal
                                                    options={priorityList}
                                                    sx={{ width: 150 }}
                                                    renderInput={(params) => <TextField {...params} label="Prioridad"
                                                    />}
                                                />
                                    </Grid>
                                    <Grid>
                                        <Autocomplete
                                                    defaultValue="Automatica"
                                                    disablePortal
                                                    options={['Automática', 'Manual']}
                                                    sx={{ width: 200 }}
                                                    renderInput={(params) => <TextField {...params} label="Tipo de ejecución"
                                                    />}
                                                />
                                    </Grid>
                                    <Grid>
                                        <Autocomplete
                                            defaultValue="Reconfiguración de Smart Wifi"
                                            disablePortal
                                            options={testsGroupsList}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label="Grupo de Pruebas"
                                            />}
                                        />
                                    </Grid>                                    
                                </Grid>
                            </Box>
                            <br></br>
                                    
                            <Box sx={{ m: 1 }}>
                                <Grid
                                    container
                                    spacing={2}
                                >
                                    <Grid>
                                        <Autocomplete
                                            defaultValue="SetParameterValue"
                                            disablePortal
                                            options={rpcList}
                                            sx={{ width: 260 }}
                                            renderInput={(params) => <TextField {...params} label="RPC"
                                            />}
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            sx={{ width: 260 }}
                                            label="Parametro"
                                            name="parameter"
                                            value="InternetGatewayDevice.LANDevice.1.WLANConfiguration.1.SSID"
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            sx={{ width: 260 }}
                                            label="Valor"
                                            name="value"
                                            value="***NewSSID###"
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            sx={{ width: 260 }}
                                            label="Validación"
                                            name="validation"
                                            value="Valor esperado=200"
                                        />
                                    </Grid>
                                    <Grid>

                                    </Grid>

                                </Grid>
                            </Box>


                        </CardContent>
                    </Card>

                    <Button
                        startIcon={(
                            <SvgIcon fontSize="small">
                                <PlusIcon />
                            </SvgIcon>
                        )}
                        variant="contained"
                    >
                        Agregar Prueba
                    </Button>

                    <Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider />
                    <Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider />
                    <Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider />
                    <Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider />
                    <Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider />
                    <SettingsCustomTests />

                </AccordionDetails>
            </Accordion>
        </div >
    );
}
