import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button
} from '@mui/material';
import { TrendingUp } from '@mui/icons-material';
import EmotionalStatusSlider from './EmotionalStatusSlider';

const PsychologicalStateSection = ({ emotionalStatus, setEmotionalStatus }) => {
  return (
    <Paper elevation={0} sx={{ p: 3, border: '1px solid #e5e7eb', borderRadius: 1.5, mb: 3 }}>
      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1f2937', mb: 3 }}>
        تطور الحالة بمرور الوقت
      </Typography>
      <Typography variant="body2" sx={{ color: '#6b7280', mb: 3 }}>
        خط زمني يوضح تغير الحالة بناءً على الرسومات السابقة (إن وجدت)
      </Typography>
      
      {/* Status Sliders */}
      <Box sx={{ mb: 3 }}>
        <EmotionalStatusSlider
          label="خائف"
          value={emotionalStatus.anxiety}
          emoji="😔"
          color="#ef4444"
          onChange={(e, newValue) => setEmotionalStatus({...emotionalStatus, anxiety: newValue})}
        />
        
        <EmotionalStatusSlider
          label="حزين"
          value={emotionalStatus.sadness}
          emoji="😟"
          color="#f59e0b"
          onChange={(e, newValue) => setEmotionalStatus({...emotionalStatus, sadness: newValue})}
        />
        
        <EmotionalStatusSlider
          label="سعيد"
          value={emotionalStatus.happiness}
          emoji="😊"
          color="#10b981"
          onChange={(e, newValue) => setEmotionalStatus({...emotionalStatus, happiness: newValue})}
        />
      </Box>

      <Button
        fullWidth
        variant="outlined"
        endIcon={<TrendingUp />}
        sx={{
          textTransform: 'none',
          borderColor: '#e5e7eb',
          color: '#374151',
          '&:hover': {
            borderColor: '#d1d5db',
            backgroundColor: '#f9fafb'
          }
        }}
      >
        تطور الحالة بمرور الوقت
      </Button>
    </Paper>
  );
};

export default PsychologicalStateSection;