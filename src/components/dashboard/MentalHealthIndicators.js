import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import CircularProgress from './CircularProgress';

const MentalHealthIndicators = () => {
  const indicators = [
    { 
      status: 'حالة عاطفية إيجابية - تحسن ملحوظ متقدم واستقرار أو متحسنة', 
      value: '100+ ال 1+', 
      color: '#10b981',
      percentage: 100
    },
    { 
      status: 'حالة محايدة - لا توجد إشارات واضحة على تحسن أو تدهور', 
      value: '0', 
      color: '#9ca3af',
      percentage: 0
    },
    { 
      status: 'حالة عاطفية سلبية - تُظهر مؤشرات قلق، حزن أو اضطراب عاطفي', 
      value: '100- ال 1-', 
      color: '#ef4444',
      percentage: 100
    }
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        backgroundColor: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: 1.5
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, fontSize: '1.125rem', color: '#1f2937' }}>
        مؤشر التحليل الناطقي
      </Typography>
      
      <Grid container spacing={4}>
        {indicators.map((indicator, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
              <CircularProgress value={indicator.value} color={indicator.color} />
              <Typography 
                variant="body2" 
                sx={{ 
                  fontSize: '0.75rem', 
                  color: '#6b7280', 
                  textAlign: 'center',
                  lineHeight: 1.6,
                  maxWidth: 280
                }}
              >
                {indicator.status}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        gap: 0.5, 
        mt: 3,
        pt: 2,
        borderTop: '1px solid #f3f4f6'
      }}>
        <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.688rem' }}>
          الإعدادات ©
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: '#3b82f6', cursor: 'pointer', fontSize: '0.688rem' }}
        >
          اسم الصحة name@mail.com
        </Typography>
      </Box>
    </Paper>
  );
};

export default MentalHealthIndicators;