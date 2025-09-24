import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { CalendarToday } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const WelcomeSection = () => {
  const navigate = useNavigate();
  
  return (
    <>
      {/* Welcome Section */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#1f2937', mb: 0.5 }}>
          مرحباً بك من جديد [اسم المؤسسة]! 🔥
        </Typography>
        <Typography variant="body1" sx={{ color: '#6b7280', display: 'flex', alignItems: 'center', gap: 0.5 }}>
          إليك لمحة سريعة عن حالة الأطفال – لأن كل متابعة تشرق
          <span style={{ color: '#10b981' }}>✓</span>
        </Typography>
      </Box>

      {/* Quick Actions */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <Button
          variant="text"
          startIcon={<CalendarToday sx={{ fontSize: 16 }} />}
          sx={{
            color: '#6b7280',
            textTransform: 'none',
            fontSize: '0.875rem',
            '&:hover': { backgroundColor: '#f3f4f6' }
          }}
        >
          ملخص الأسبوع
        </Button>
        <Button
          variant="text"
          onClick={() => navigate('/children', { state: { openAddChild: true } })}
          sx={{
            color: '#818cf8',
            textTransform: 'none',
            fontSize: '0.875rem',
            '&:hover': { backgroundColor: '#f3f4f613' }
          }}
        >
          إضافة طفل جديد +
        </Button>
        <Button
          variant="text"
          onClick={() => navigate('/children', { state: { openUploadDrawing: true } })}
          sx={{
            color: '#818cf8',
            textTransform: 'none',
            fontSize: '0.875rem',
            '&:hover': { backgroundColor: '#f3f4f613' }
          }}
        >
          رفع رسمة جديدة +
        </Button>
      </Box>
    </>
  );
};

export default WelcomeSection;