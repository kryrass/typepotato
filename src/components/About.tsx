import React, { useState } from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import '../layout/About.css';

const About: React.FC<{ name: string }> = ({ name }) => {
    const hobbies = ['Lugemine', 'Küpsetamine', 'Magamine'];
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Message:', message);
    };

    return (
        <div className="container">
            <Typography variant="h4" className="name">{name}</Typography>
            <Typography variant="h4">Hobid:</Typography>
            <Grid container spacing={2}>
                {hobbies.map((hobby, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Typography variant="h6">{hobby}</Typography>
                    </Grid>
                ))}
            </Grid>
            <form className="contact-form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            fullWidth
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Tekstiväli"
                            name="message"
                            multiline
                            rows={4}
                            fullWidth
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Button type="submit" variant="contained">Salvesta</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default About;
