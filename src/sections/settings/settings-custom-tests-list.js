import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomSettingsSPVTests from 'src/sections/settings/custom_execution/custom-settings-spv-tests';
import CustomSettingsGPVTests from 'src/sections/settings/custom_execution/custom-settings-gpv-tests';
import CustomSettingsAddObjectTests from 'src/sections/settings/custom_execution/custom-settings-add-object-tests';
import CustomSettingsDeleteObjectTests from 'src/sections/settings/custom_execution/custom-settings-delete-object-tests';
import CustomSettingsRebootTests from 'src/sections/settings/custom_execution/custom-settings-reboot-tests';
import CustomSettingsFRTests from 'src/sections/settings/custom_execution/custom-settings-fr-tests';
import CustomSettingsGPVWifi1Tests from 'src/sections/settings/custom_execution/custom-settings-gpv-wifi1-tests';
import CustomSettingsGPVWifi2Tests from 'src/sections/settings/custom_execution/custom-settings-gpv-wifi2-tests';
import CustomSettingsSPVWifi1Tests from 'src/sections/settings/custom_execution/custom-settings-spv-wifi1-tests';
import CustomSettingsSPVWifi2Tests from 'src/sections/settings/custom_execution/custom-settings-spv-wifi2-tests';

export default function SettingsCustomTestsList() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header">
                    <Typography component="span" variant="h5">GetParameterValue</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CustomSettingsGPVTests />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header">
                    <Typography component="span" variant="h5">SetParameterValue</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CustomSettingsSPVTests />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header">
                    <Typography component="span" variant="h5">AddObject</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CustomSettingsAddObjectTests />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel4-header">
                    <Typography component="span" variant="h5">DeleteObject</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CustomSettingsDeleteObjectTests />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel5-content"
                    id="panel5-header">
                    <Typography component="span" variant="h5">Reboot</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CustomSettingsRebootTests />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel6-content"
                    id="panel6-header">
                    <Typography component="span" variant="h5">Factory Reset</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CustomSettingsFRTests />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel7-content"
                    id="panel7-header">
                    <Typography component="span" variant="h5">Consulta de Smart WiFi</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="subpanel7-wifi1-content"
                            id="subpanel7-wifi1-header">
                            <Typography component="span" variant="h5">WLAN.1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CustomSettingsGPVWifi1Tests />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="subpanel7-wifi2-content"
                            id="subpanel7-wifi2-header">
                            <Typography component="span" variant="h5">WLAN.2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CustomSettingsGPVWifi2Tests />
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel8-content"
                    id="panel8-header">
                    <Typography component="span" variant="h5">Reconfiguración de Smart WiFi</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="subpanel8-wifi1-content"
                            id="subpanel8-wifi1-header">
                            <Typography component="span" variant="h5">WLAN.1</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CustomSettingsSPVWifi1Tests />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="subpanel8-wifi2-content"
                            id="subpanel8-wifi2-header">
                            <Typography component="span" variant="h5">WLAN.2</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <CustomSettingsSPVWifi2Tests />
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>            
        </div>
    );
}
