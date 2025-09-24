import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputAdornment
} from '@mui/material';
import { CalendarMonth, ExpandMore } from '@mui/icons-material';

const ChildInfoForm = ({ childData, onChange }) => {
  const fieldStyle = {
    backgroundColor: '#fff',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#e5e7eb',
      },
      '&:hover fieldset': {
        borderColor: '#d1d5db',
      },
    }
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 2 }}>
        معلومات الطفل
      </Typography>
      
      {/* Full Name */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
          الاسم الكامل
        </Typography>
        <TextField
          fullWidth
          size="small"
          value={childData.fullName}
          onChange={(e) => onChange({...childData, fullName: e.target.value})}
          sx={fieldStyle}
        />
      </Box>

      {/* Gender */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
          النوع (ذكر / أنثى)
        </Typography>
        <Select
          fullWidth
          size="small"
          value={childData.gender}
          onChange={(e) => onChange({...childData, gender: e.target.value})}
          displayEmpty
          IconComponent={ExpandMore}
          sx={{
            ...fieldStyle,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#e5e7eb',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#d1d5db',
            }
          }}
        >
          <MenuItem value="">اختر</MenuItem>
          <MenuItem value="ذكر">ذكر</MenuItem>
          <MenuItem value="أنثى">أنثى</MenuItem>
        </Select>
      </Box>

      {/* Birth Date */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
          تاريخ الميلاد / العمر
        </Typography>
        <TextField
          fullWidth
          size="small"
          type="date"
          value={childData.birthDate}
          onChange={(e) => onChange({...childData, birthDate: e.target.value})}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <CalendarMonth sx={{ fontSize: 18, color: '#9ca3af' }} />
              </InputAdornment>
            ),
          }}
          sx={fieldStyle}
        />
      </Box>

      {/* Responsible Person */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
          المرشد المسؤول
        </Typography>
        <TextField
          fullWidth
          size="small"
          value={childData.responsiblePerson}
          onChange={(e) => onChange({...childData, responsiblePerson: e.target.value})}
          sx={fieldStyle}
        />
      </Box>

      {/* Current Psychological Status */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="caption" sx={{ color: '#6b7280', display: 'block', mb: 0.5 }}>
          الوضع النفسي الحالي
        </Typography>
        <TextField
          fullWidth
          size="small"
          multiline
          rows={3}
          value={childData.currentStatus}
          onChange={(e) => onChange({...childData, currentStatus: e.target.value})}
          sx={fieldStyle}
        />
      </Box>
    </Box>
  );
};

export default ChildInfoForm;