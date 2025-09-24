import React from 'react';
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  Button
} from '@mui/material';
import {
  Close,
  CloudUpload,
  CalendarMonth
} from '@mui/icons-material';
import DrawingNotes from './DrawingNotes';

const AddDrawingDrawer = ({
  open,
  onClose,
  uploadedFile,
  setUploadedFile,
  drawingDate,
  setDrawingDate,
  drawingBehavior,
  setDrawingBehavior,
  drawingTopic,
  setDrawingTopic,
  emotionalState,
  setEmotionalState
}) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 400,
          boxSizing: 'border-box',
          backgroundColor: '#f9fafb',
          borderRight: '1px solid #e5e7eb'
        }
      }}
    >
      <Box sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937' }}>
            إضافة رسمة جديدة
          </Typography>
          <IconButton onClick={onClose} size="small">
            <Close />
          </IconButton>
        </Box>

        {/* Upload Section */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 1.5 }}>
            رفع الرسمة
          </Typography>
          <Box
            component="label"
            sx={{
              border: '2px dashed #e5e7eb',
              borderRadius: 2,
              p: 3,
              textAlign: 'center',
              backgroundColor: '#fff',
              cursor: 'pointer',
              display: 'block',
              '&:hover': {
                borderColor: '#d1d5db',
                backgroundColor: '#f9fafb'
              }
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setUploadedFile(e.target.files[0])}
              style={{ display: 'none' }}
            />
            <CloudUpload sx={{ fontSize: 40, color: '#9ca3af', mb: 1 }} />
            <Typography variant="body2" sx={{ color: '#6b7280', mb: 0.5 }}>
              استيراد الملفات
            </Typography>
            <Typography variant="caption" sx={{ color: '#9ca3af' }}>
              اسحب وأفلت الملفات هنا أو انقر لرفع
            </Typography>
            {uploadedFile && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="caption" sx={{ color: '#6b7280' }}>
                  {uploadedFile.name}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        {/* Date Field */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 2 }}>
            معلومات الرسمة
          </Typography>
          <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
            تاريخ الرسمة
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="date"
            value={drawingDate}
            onChange={(e) => setDrawingDate(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CalendarMonth sx={{ fontSize: 18, color: '#9ca3af' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              backgroundColor: '#fff',
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#e5e7eb' },
                '&:hover fieldset': { borderColor: '#d1d5db' },
              }
            }}
          />
        </Box>

        {/* Drawing Notes Component */}
        <DrawingNotes
          drawingBehavior={drawingBehavior}
          setDrawingBehavior={setDrawingBehavior}
          drawingTopic={drawingTopic}
          setDrawingTopic={setDrawingTopic}
          emotionalState={emotionalState}
          setEmotionalState={setEmotionalState}
        />

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
          <Button
            variant="outlined"
            fullWidth
            onClick={onClose}
            sx={{
              color: '#6b7280',
              borderColor: '#e5e7eb',
              textTransform: 'none',
              '&:hover': {
                borderColor: '#d1d5db',
                backgroundColor: '#f9fafb'
              }
            }}
          >
            إلغاء
          </Button>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: '#3b82f6',
              textTransform: 'none',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#2563eb',
                boxShadow: 'none',
              }
            }}
          >
            تحليل الآن
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AddDrawingDrawer;