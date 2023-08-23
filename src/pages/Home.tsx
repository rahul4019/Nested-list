import React, { useState } from 'react';
import { TextField, Button, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { User } from '../types';

const Home: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // user object
    const user: User = {
      name,
      email,
      phone,
    };

    // set user details in localstorage
    localStorage.setItem('user', JSON.stringify(user));

    // redirect user to user page
    navigate('/user-page');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        justifyContent: 'center',
        my: '10%',
      }}
    >
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            variant="standard"
            required
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            variant="standard"
            required
          />
          <TextField
            label="Phone Number"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            margin="normal"
            variant="standard"
            required
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Home;
