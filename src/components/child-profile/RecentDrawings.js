import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  Button
} from '@mui/material';

const RecentDrawings = ({ drawings }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f2937', mb: 2 }}>
        آخر 3 رسومات
      </Typography>
      <Grid container spacing={2}>
        {drawings.map((drawing) => (
          <Grid item xs={4} key={drawing.id}>
            <Card
              elevation={0}
              sx={{
                border: '1px solid #e5e7eb',
                borderRadius: 1.5,
                overflow: 'hidden',
                cursor: 'pointer',
                '&:hover': {
                  borderColor: '#d1d5db',
                  boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)'
                }
              }}
            >
              <Box
                sx={{
                  height: 120,
                  backgroundColor: '#f3f4f6',
                  backgroundImage: 'url(/scribble.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <Box sx={{ p: 1.5, textAlign: 'center' }}>
                <Typography variant="caption" sx={{ color: '#6b7280' }}>
                  {drawing.date}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button
          variant="text"
          sx={{
            textTransform: 'none',
            color: '#3b82f6',
            fontSize: '0.875rem'
          }}
        >
          عرض كل الرسومات
        </Button>
      </Box>
    </Box>
  );
};

export default RecentDrawings;