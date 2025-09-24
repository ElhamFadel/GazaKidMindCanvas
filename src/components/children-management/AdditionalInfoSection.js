import React from 'react';
import { Box, Typography, IconButton, TextField } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const AdditionalInfoSection = ({ expanded, onToggle, notes, onNotesChange }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: expanded ? 2 : 0,
          cursor: 'pointer'
        }}
        onClick={onToggle}
      >
        <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151' }}>
          معلومات إضافية (اختيارية)
        </Typography>
        <IconButton
          size="small"
          sx={{
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s'
          }}
        >
          <ExpandMore />
        </IconButton>
      </Box>

      {expanded && (
        <Box sx={{ mt: 2 }}>
          <Box sx={{ mb: 2 }}>
            <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
              ملاحظات أولية
            </Typography>
            <TextField
              fullWidth
              size="small"
              multiline
              rows={3}
              value={notes}
              onChange={(e) => onNotesChange(e.target.value)}
              sx={{
                backgroundColor: '#fff',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#e5e7eb' },
                  '&:hover fieldset': { borderColor: '#d1d5db' }
                }
              }}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AdditionalInfoSection;