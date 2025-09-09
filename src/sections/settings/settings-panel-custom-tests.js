import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsCustomTests from 'src/sections/settings/settings-custom-tests-table';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import rpcList from './rpc-list';
import { Autocomplete, Box, Button, Card, CardContent, Divider, Grid, SvgIcon, TextField } from '@mui/material';

export default function SettingsPanelCustomTests() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panelCustomTests-content"
                    id="panelCustomTests-header">
                    <Typography component="span" variant="h6">Pruebas Personalizadas</Typography>
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
                                            value="InternetGatewayDevice.CustomParameter"
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            sx={{ width: 260 }}
                                            label="Valor"
                                            name="value"
                                            value="5"
                                        />
                                    </Grid>
                                    <Grid>
                                        <TextField
                                            sx={{ width: 260 }}
                                            label="Validación"
                                            name="validation"
                                            value=""
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
