import React from 'react';
import { Box } from '@mui/material';

const LoginHeader = () => {
  return (
    <Box
      component="img"
      src="/Auth/Asessts/Logo.png"
      alt="GazaKidMindCanvas"
      sx={{
        position: 'absolute',
        top: 30,
        right: 30,
        width: 'auto',
        height: 60
      }}
    />
  );
};

export default LoginHeader;