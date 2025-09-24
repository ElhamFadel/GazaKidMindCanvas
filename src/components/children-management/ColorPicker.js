import React from 'react';
import { Box, Typography } from '@mui/material';

const ColorPicker = ({ selectedColor, onColorSelect }) => {
  const colors = ['#ff9800', '#f44336', '#4caf50', '#2196f3', '#9c27b0', '#795548'];

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 1, fontSize: '0.875rem' }}>
        لون المجموعة
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {colors.map((color) => (
          <Box
            key={color}
            onClick={() => onColorSelect(color)}
            sx={{
              width: 40,
              height: 40,
              borderRadius: 1,
              backgroundColor: color,
              cursor: 'pointer',
              border: selectedColor === color ? '3px solid #1f2937' : '1px solid #e5e7eb',
              transition: 'all 0.2s',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }
            }}
          />
        ))}
      </Box>
      <Typography variant="caption" sx={{ color: '#ff9800', mt: 1, display: 'block', fontSize: '0.75rem' }}>
        سيتم استخدام هذا اللون لتمييز المجموعة
      </Typography>
    </Box>
  );
};

export default ColorPicker;