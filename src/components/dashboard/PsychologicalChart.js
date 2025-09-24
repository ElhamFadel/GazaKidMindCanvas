import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Chip
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';
import ChartLegend from './ChartLegend';

const PsychologicalChart = ({ selectedChildren, setSelectedChildren }) => {
  // Chart data
  const chartData = [
    { date: 'Oct', mohamed: -2.5, leila: -4, waleed: -5 },
    { date: 'Jul 5', mohamed: -2, leila: -3, waleed: -4 },
    { date: 'Jul 10', mohamed: -1.5, leila: -2.5, waleed: -3.5 },
    { date: '15 يوليو', mohamed: -0.5, leila: -1, waleed: -2.5 },
    { date: 'Jul 20', mohamed: 0.5, leila: 0, waleed: -1.5 },
    { date: 'Jul 25', mohamed: 1.5, leila: 1, waleed: -0.5 },
    { date: 'Aug', mohamed: 2.5, leila: 2, waleed: 0.5 },
    { date: 'Aug 5', mohamed: 3.5, leila: 3, waleed: 1.5 }
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        mb: 3,
        backgroundColor: '#fff',
        border: '1px solid #e5e7eb',
        borderRadius: 1.5
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 3 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, fontSize: '1.125rem', color: '#1f2937' }}>
            تحليل التغيرات النفسية الزمنية للأطفال
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.813rem' }}>
            مراقبة تحسن أو تدهور الحالة النفسية للأطفال مع مرور الوقت بناءً على رسوماتهم
          </Typography>
        </Box>
        <Button
          variant="text"
          size="small"
          endIcon={<span style={{ fontSize: '0.75rem' }}>▼</span>}
          sx={{ 
            color: '#6b7280', 
            textTransform: 'none', 
            fontSize: '0.813rem',
            backgroundColor: '#f9fafb',
            px: 2,
            '&:hover': {
              backgroundColor: '#f3f4f6'
            }
          }}
        >
          آخر 30 يوم
        </Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ color: '#6b7280', fontSize: '0.813rem' }}>
            حدد الأطفال ( أحد الأقسى ٣ أطفال )
          </Typography>
          <Stack direction="row" spacing={1}>
            {['وليد', 'محمد', 'ليلا', 'يوم'].map((child) => (
              <Chip
                key={child}
                label={child}
                onClick={() => {
                  if (child !== 'يوم') {
                    setSelectedChildren(prev =>
                      prev.includes(child)
                        ? prev.filter(c => c !== child)
                        : [...prev, child]
                    );
                  }
                }}
                size="small"
                sx={{
                  backgroundColor: selectedChildren.includes(child) ? '#7c3aed' : '#f3f4f6',
                  color: selectedChildren.includes(child) ? '#fff' : '#374151',
                  border: 'none',
                  '&:hover': {
                    backgroundColor: selectedChildren.includes(child) ? '#6d28d9' : '#e5e7eb'
                  },
                  fontSize: '0.75rem',
                  height: 26,
                  fontWeight: selectedChildren.includes(child) ? 600 : 400
                }}
              />
            ))}
          </Stack>
        </Box>
        <Typography variant="caption" sx={{ color: '#9ca3af', fontSize: '0.75rem' }}>
          الفترة الزمنية
        </Typography>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
            <XAxis 
              dataKey="date" 
              tick={{ fill: '#9ca3af', fontSize: 11 }} 
              axisLine={{ stroke: '#e5e7eb' }}
            />
            <YAxis 
              tick={{ fill: '#9ca3af', fontSize: 11 }} 
              axisLine={{ stroke: '#e5e7eb' }}
              domain={[-10, 10]}
              ticks={[-10, -5, 0, 5, 10]}
            />
            <Tooltip />
            <ReferenceArea x1="Jul 10" x2="Jul 20" fill="#fef3c7" fillOpacity={0.6} />
            <Line 
              type="monotone" 
              dataKey="mohamed" 
              stroke="#f59e0b" 
              strokeWidth={2} 
              dot={{ fill: '#f59e0b', r: 3 }} 
            />
            <Line 
              type="monotone" 
              dataKey="leila" 
              stroke="#3b82f6" 
              strokeWidth={2} 
              dot={{ fill: '#3b82f6', r: 3 }} 
            />
            <Line 
              type="monotone" 
              dataKey="waleed" 
              stroke="#8b5cf6" 
              strokeWidth={2} 
              dot={{ fill: '#8b5cf6', r: 3 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      <ChartLegend />
    </Paper>
  );
};

export default PsychologicalChart;