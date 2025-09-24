import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { AddPhotoAlternateOutlined } from '@mui/icons-material';

const LogoUploadSection = ({ selectedLogo, onUpload, onUpdate, onDelete }) => {
  return (
    <Box>
      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
        شعار المؤسسة
      </Typography>
      <Typography variant="body2" sx={{ color: '#6b7280', mb: 2 }}>
        يمكنك تحديث شعار المؤسسة في أي وقت برفع صورة جديدة، أو حذفه. يُفضل استخدام صورة واضحة بصيغة PNG أو JPG.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Box
          component="label"
          htmlFor="logo-upload"
          sx={{
            width: 120,
            height: 120,
            border: '2px dashed #e5e7eb',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
            bgcolor: '#f9fafb',
            '&:hover': {
              borderColor: '#3b82f6',
              bgcolor: '#f3f4f6',
            },
          }}
        >
          <input
            id="logo-upload"
            type="file"
            accept="image/*"
            onChange={onUpload}
            style={{ display: 'none' }}
          />
          {selectedLogo ? (
            <Box
              component="img"
              src={selectedLogo.preview}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 1.5,
              }}
            />
          ) : (
            <AddPhotoAlternateOutlined sx={{ fontSize: 40, color: '#9ca3af' }} />
          )}
        </Box>
        <Button
          variant="outlined"
          onClick={onUpdate}
          sx={{
            borderColor: '#10b981',
            color: '#10b981',
            '&:hover': {
              borderColor: '#059669',
              bgcolor: '#f0fdf4',
            },
          }}
        >
          تحديث
        </Button>
        <Button
          variant="outlined"
          onClick={onDelete}
          sx={{
            borderColor: '#ef4444',
            color: '#ef4444',
            '&:hover': {
              borderColor: '#dc2626',
              bgcolor: '#fee2e2',
            },
          }}
        >
          حذف
        </Button>
      </Box>
    </Box>
  );
};

export default LogoUploadSection;