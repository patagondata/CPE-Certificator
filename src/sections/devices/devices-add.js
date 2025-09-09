import { useCallback, useState } from 'react';
import {
    Autocomplete,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Stack,
    TextField
} from '@mui/material';

export const DevicesAdd = () => {
    const [values, setValues] = useState({
        oui: '',
        pc: '',
        fw: '',
        sn: ''
    });

    const handleChange = useCallback(
        (event) => {
            setValues((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value
            }));
        },
        []
    );

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
        },
        []
    );

    const ouiOptions = [
        { label: '6C2E85 ', id: 1 },
        { label: '001095', id: 2 },
        { label: '0C7C28', id: 3 }
    ];

    const pcOptions = [
        { label: 'FAST3890_FB ', id: 1 },
        { label: 'CGA4233TCH3', id: 2 },
        { label: 'BCM93384WVG', id: 3 }
    ];

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader
                    subheader="Por favor capture los datos del CPE."
                    title="Detalles del dispositivo"
                />

                <Divider />
                <CardContent>
                    <Stack
                        spacing={3}
                        sx={{ maxWidth: 400 }}
                    >
                        <Autocomplete
                            fullWidth
                            label="OUI"
                            name="oui"
                            onChange={handleChange}
                            value={values.oui}
                            disablePortal
                            options={ouiOptions}
                            sx={{ width: 400 }}
                            renderInput={(params) => <TextField {...params} label="OUI"
                            />}
                        />
                        <Autocomplete
                            fullWidth
                            label="Product Class"
                            name="pc"
                            onChange={handleChange}
                            value={values.pc}
                            disablePortal
                            options={pcOptions}
                            sx={{ width: 400 }}
                            renderInput={(params) => <TextField {...params} label="Product Class"
                            />}
                        />
                        <TextField
                            fullWidth
                            label="Número de Serie"
                            name="sn"
                            onChange={handleChange}
                            value={values.sn}
                        />
                        <TextField
                            fullWidth
                            label="Versión de FW"
                            name="fw"
                            onChange={handleChange}
                            value={values.fw}
                        />

                        <Button variant="contained"
                        href="/devices">
                        Crear Dispositivo
                    </Button>
                    </Stack>
                </CardContent>
               
            </Card>
        </form>
    );
};
