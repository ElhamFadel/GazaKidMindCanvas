import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Add } from '@mui/icons-material';

const Header = ({ onAddChild }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 700, color: '#1f2937' }}>
        إدارة الأطفال
      </Typography>
      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={onAddChild}
        sx={{
          backgroundColor: '#3b82f6',
          textTransform: 'none',
          borderRadius: 1.5,
          px: 3,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#2563eb',
            boxShadow: 'none',
          }
        }}
      >
        إضافة طفل جديد
      </Button>
    </Box>
  );
};

export default Header;