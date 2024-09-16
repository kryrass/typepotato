import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, ListItemButton, ListItemText, TextField, Typography, Stack } from '@mui/material';
import '../Box.css'; 
import { useState } from 'react';

export default function BoxBasic() {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('Form submitted');
  };

  return (
    <Box 
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack gap={2}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", textTransform: "uppercase" }} 
          >
            Hello, User!
          </Typography>
          

            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Lugemine" secondary="Magamine" />
            </ListItemButton>

            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              sx={{ mt: 2 }}
            />
            <TextField
              label="Tekstiväli"
              type="text"
              variant="outlined"
              fullWidth
              sx={{ mt: 2 }}
            />

            <Button type="submit" variant="contained">Salvesta</Button>
          
        </Stack>
      </form>
    </Box>
  );
}
