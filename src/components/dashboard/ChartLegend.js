import React from 'react';
import { Box, Typography } from '@mui/material';

const ChartLegend = () => {
  return (
    <>
      {/* Legend below chart */}
      <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mt: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 12, height: 2, backgroundColor: '#f59e0b' }} />
          <Typography variant="caption" sx={{ fontSize: '0.75rem', color: '#374151' }}>
            محمد : 12
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 12, height: 2, backgroundColor: '#3b82f6' }} />
          <Typography variant="caption" sx={{ fontSize: '0.75rem', color: '#374151' }}>
            ليلى : 13
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 12, height: 2, backgroundColor: '#8b5cf6' }} />
          <Typography variant="caption" sx={{ fontSize: '0.75rem', color: '#374151' }}>
            وليد- 12 : حالة سالمة مستقرة
          </Typography>
        </Box>
      </Box>

      {/* Yellow notification box */}
      <Box
        sx={{
          mt: 3,
          p: 1.5,
          backgroundColor: '#fef3c7',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5
        }}
      >
        <Typography variant="caption" sx={{ fontWeight: 600, fontSize: '0.75rem', color: '#78350f' }}>
          📅 15 يوليو
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
          <Typography variant="caption" sx={{ color: '#92400e', fontSize: '0.75rem' }}>علامات تحسن</Typography>
          <Typography variant="caption" sx={{ fontWeight: 600, color: '#f59e0b', fontSize: '0.75rem' }}>محمد : 12</Typography>
          <Typography variant="caption" sx={{ color: '#92400e', fontSize: '0.75rem' }}>تماثل</Typography>
          <Typography variant="caption" sx={{ fontWeight: 600, color: '#3b82f6', fontSize: '0.75rem' }}>ليلى : 13</Typography>
          <Typography variant="caption" sx={{ fontWeight: 600, color: '#8b5cf6', fontSize: '0.75rem' }}>وليد- 12</Typography>
          <Typography variant="caption" sx={{ color: '#92400e', fontSize: '0.75rem' }}>: حالة سالمة مستقرة</Typography>
        </Box>
      </Box>
    </>
  );
};

export default ChartLegend;