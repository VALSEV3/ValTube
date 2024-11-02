import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import LoginGoogle from './loginGoogle';
import LoginEmail from './loginEmail';

const Login: React.FC = () => {


  


  return (
    <Container component="main" maxWidth="xs" style={{ height: '100vh' }}>
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Paper elevation={3} style={{ padding: '20px', width: '100%' }}>
          <Typography variant="h5" align="center">
            Log in
          </Typography>
         
           
<LoginGoogle/>
<LoginEmail/>

        </Paper>
      </Box>
    </Container>
  );
};

export default Login;
