import React from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  IconButton
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const StatisticsCard = ({ title, value, change, icon, color }) => {
  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        backgroundColor: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: 1.5,
        position: 'relative',
        overflow: 'visible'
      }}
    >
      <IconButton
        size="small"
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          color: '#9ca3af',
          padding: 0.5
        }}
      >
        <MoreVert fontSize="small" />
      </IconButton>
      <CardContent sx={{ p: 2.5, pr: 4 }}>
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: `${color}15`,
            color: color,
            mb: 2
          }}
        >
          {icon}
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1, fontSize: '0.813rem' }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '1.75rem', color: '#1f2937' }}>
            {value}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: change > 0 ? '#10b981' : '#ef4444',
              fontSize: '0.75rem',
              fontWeight: 500
            }}
          >
            {change > 0 ? (
              <span style={{ fontSize: '0.875rem' }}>↑</span>
            ) : (
              <span style={{ fontSize: '0.875rem' }}>↓</span>
            )}
            <Typography variant="caption" sx={{ fontWeight: 500, ml: 0.25 }}>
              {Math.abs(change)}%
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;