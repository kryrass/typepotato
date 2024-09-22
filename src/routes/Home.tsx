import React from 'react';
import { Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Stack spacing={2} sx={{ padding: 2, textAlign: 'center' }}>
            <Typography variant="h4">Tere tulemast!</Typography>
            <Typography variant="body1">Siit saad alustada oma teekonda.</Typography>
            <Link to="/form" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary">
                    Alusta
                </Button>
            </Link>
        </Stack>
    );
};

export default Home;
