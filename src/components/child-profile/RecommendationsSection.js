import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper
} from '@mui/material';
import { WarningAmberOutlined } from '@mui/icons-material';

const RecommendationsSection = ({ recommendations }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f2937', mb: 3 }}>
          التوصيات الذكية
        </Typography>
        {recommendations.map((rec, index) => (
          <Paper
            key={index}
            elevation={0}
            sx={{
              p: 3,
              mb: 2,
              border: '1px solid #e5e7eb',
              borderRadius: 1.5,
              borderLeft: `4px solid ${rec.type === 'positive' ? '#3b82f6' : rec.type === 'warning' ? '#f59e0b' : '#10b981'}`
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              {rec.type === 'warning' && <WarningAmberOutlined sx={{ color: '#f59e0b', fontSize: 20 }} />}
              <Typography variant="body1" sx={{ fontWeight: 600, color: '#1f2937' }}>
                {rec.type === 'positive' ? '⚪' : rec.type === 'warning' ? '⚪' : '⚪'} {rec.title}:
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.7 }}>
              {rec.description}
            </Typography>
          </Paper>
        ))}
        <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mt: 3 }}>
          إضافة ملاحظة
        </Typography>
      </Grid>
    </Grid>
  );
};

export default RecommendationsSection;