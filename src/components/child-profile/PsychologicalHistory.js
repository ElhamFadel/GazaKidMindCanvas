import React from 'react';
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  Button,
  Chip
} from '@mui/material';

const PsychologicalHistory = ({ history }) => {
  return (
    <Paper elevation={0} sx={{ p: 3, border: '1px solid #e5e7eb', borderRadius: 1.5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f2937' }}>
          تاريخ السجل
        </Typography>
        <Chip
          label="سعيد 😊"
          size="small"
          sx={{
            backgroundColor: '#d1fae5',
            color: '#065f46',
            fontWeight: 600
          }}
        />
      </Box>

      {/* Timeline */}
      <List>
        {history.map((item, index) => (
          <ListItem key={index} sx={{ px: 0 }}>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: item.color
                  }}
                />
                <Typography variant="caption" sx={{ color: '#6b7280' }}>
                  {item.date}
                </Typography>
              </Box>
              <Box sx={{ ml: 3, pl: 1, borderLeft: index < history.length - 1 ? '2px solid #e5e7eb' : 'none', pb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f2937', mb: 1 }}>
                  الحالة النفسية
                </Typography>
                <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.7 }}>
                  {item.analysis}
                </Typography>
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>

      <Button
        variant="text"
        sx={{
          textTransform: 'none',
          color: '#3b82f6',
          mt: 2
        }}
      >
        عرض التحليل الكامل
      </Button>
    </Paper>
  );
};

export default PsychologicalHistory;