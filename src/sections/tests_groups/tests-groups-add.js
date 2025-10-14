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

export const TestsGroupsAdd = () => {
    const [values, setValues] = useState({
        oui: '',
        pc: '',
        description: '',
        id: ''
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

    return (
        <form onSubmit={handleSubmit}>
            <Card>
                <CardHeader
                    subheader="Por favor capture los datos del Grupo de Pruebas a crear."
                    title="Detalles del Grupo de Pruebas"
                />

                <Divider />
                <CardContent>
                    <Stack
                        spacing={3}
                        sx={{ maxWidth: 400 }}
                    > 
                        <TextField
                            fullWidth
                            label="Nombre"
                            name="group_name"
                            onChange={handleChange}
                            value={values.pc}
                        />
                        <TextField
                            fullWidth
                            label="Descripción"
                            name="description"
                            onChange={handleChange}
                            value={values.description}
                        />

                        <Button variant="contained"
                        href="/tests-groups">
                        Crear Grupo
                    </Button>
                    </Stack>
                </CardContent>
               
            </Card>
        </form>
    );
};
