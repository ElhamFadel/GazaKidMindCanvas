import React from 'react';
import { Box, IconButton } from '@mui/material';
import { ViewList, GridView } from '@mui/icons-material';

const ViewModeToggle = ({ viewMode, onChange }) => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#f9fafb', borderRadius: 0.5, border: '1px solid #e5e7eb' }}>
      <IconButton 
        size="small" 
        onClick={() => onChange('list')}
        sx={{ 
          color: viewMode === 'list' ? '#3b82f6' : '#6b7280',
          backgroundColor: viewMode === 'list' ? '#eff6ff' : 'transparent',
          borderRadius: 0.5,
          p: 0.5
        }}
      >
        <ViewList sx={{ fontSize: 16 }} />
      </IconButton>
      <IconButton 
        size="small" 
        onClick={() => onChange('grid')}
        sx={{ 
          color: viewMode === 'grid' ? '#3b82f6' : '#6b7280',
          backgroundColor: viewMode === 'grid' ? '#eff6ff' : 'transparent',
          borderRadius: 0.5,
          p: 0.5
        }}
      >
        <GridView sx={{ fontSize: 16 }} />
      </IconButton>
    </Box>
  );
};

export default ViewModeToggle;