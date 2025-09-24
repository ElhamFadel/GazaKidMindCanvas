import React from 'react';
import { Box, Typography, TextField, Divider, Slider } from '@mui/material';

const DrawingNotes = ({
  drawingBehavior,
  setDrawingBehavior,
  drawingTopic,
  setDrawingTopic,
  emotionalState,
  setEmotionalState
}) => {
  return (
    <>
      {/* Notes Section */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 2 }}>
          ملاحظات تُفيد تحليل الرسمة
        </Typography>
        
        {/* Behavior Observation */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
            هل لاحظت أي سلوك أو تفاعل أثناء الرسم؟
          </Typography>
          <TextField
            fullWidth
            size="small"
            multiline
            rows={3}
            value={drawingBehavior}
            onChange={(e) => setDrawingBehavior(e.target.value)}
            sx={{
              backgroundColor: '#fff',
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#e5e7eb' },
                '&:hover fieldset': { borderColor: '#d1d5db' },
              }
            }}
          />
          <Typography variant="caption" sx={{ color: '#6b7280', mt: 0.5, display: 'block', fontSize: '0.75rem' }}>
            صف سلوك الطفل خلال تنفيذ الرسمة إن وجدت ملاحظات واضحة.<br/>
            مثال: "كان يُمسك القلم بشدة"، أو "رسم بسرعة وبلا تركيز"
          </Typography>
        </Box>

        {/* Drawing Topic */}
        <Box>
          <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
            هل قَلِق من الطفل موضوع معين للرسم؟
          </Typography>
          <TextField
            fullWidth
            size="small"
            multiline
            rows={3}
            value={drawingTopic}
            onChange={(e) => setDrawingTopic(e.target.value)}
            sx={{
              backgroundColor: '#fff',
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#e5e7eb' },
                '&:hover fieldset': { borderColor: '#d1d5db' },
              }
            }}
          />
          <Typography variant="caption" sx={{ color: '#6b7280', mt: 0.5, display: 'block', fontSize: '0.75rem' }}>
            يُرجى توضيح إن كانت الرسمة موجهة (بموضوع محدد) أم حرة.<br/>
            مثال: "قلبت منه أن يرسم عائلته"، أو "كانت الرسمة حرة تماماً"
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 3 }} />

      {/* Emotional State Slider */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 2 }}>
          تطور الحالة بمرور الوقت
        </Typography>
        <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 2, fontSize: '0.75rem' }}>
          خط زمني يوضح تغير الحالة بناءً على الرسومات السابقة (إن وجدت)
        </Typography>
        <Box sx={{
          backgroundColor: '#fff',
          borderRadius: 2,
          p: 2,
          border: '1px solid #e5e7eb'
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.75rem' }}>
              حزين
            </Typography>
            <Typography variant="caption" sx={{ color: '#6b7280', fontSize: '0.75rem' }}>
              سعيد
            </Typography>
          </Box>
          <Slider
            value={emotionalState}
            onChange={(e, newValue) => setEmotionalState(newValue)}
            track={false}
            sx={{
              height: 8,
              '& .MuiSlider-rail': {
                background: 'linear-gradient(to right, #ef4444, #f59e0b, #10b981)',
                opacity: 1,
                height: 8
              },
              '& .MuiSlider-thumb': {
                width: 24,
                height: 24,
                backgroundColor: '#3b82f6',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                '&:before': {
                  display: 'none'
                },
                '&:hover': {
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                }
              }
            }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography sx={{ fontSize: '1.25rem' }}>😢</Typography>
            <Typography sx={{ fontSize: '1.25rem' }}>😐</Typography>
            <Typography sx={{ fontSize: '1.25rem' }}>😊</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DrawingNotes;