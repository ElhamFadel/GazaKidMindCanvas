import React from 'react';
import { Box, Container } from '@mui/material';
import LoginHeader from './LoginHeader';
import LoginForm from './LoginForm';
import LoginIllustration from './LoginIllustration';

const Login = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#f2f4f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        direction: 'rtl',
        position: 'relative'
      }}
    >
      <LoginHeader />
      
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4
          }}
        >
          <LoginForm />
          <LoginIllustration />
        </Box>
      </Container>
    </Box>
  );
};

export default Login;