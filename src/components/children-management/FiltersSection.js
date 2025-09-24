import React from 'react';
import {
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Typography
} from '@mui/material';
import {
  Search,
  SortOutlined
} from '@mui/icons-material';
import ViewModeToggle from './ViewModeToggle';

const FiltersSection = ({
  searchQuery,
  onSearchChange,
  sortFilter,
  onSortChange,
  statusFilter,
  onStatusChange,
  genderFilter,
  onGenderChange,
  viewMode,
  onViewModeChange
}) => {
  const selectStyle = {
    fontSize: '0.688rem',
    backgroundColor: '#f9fafb',
    '& .MuiSelect-select': {
      py: 0.5
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#e5e7eb',
    }
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          size="small"
          placeholder="بحث"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ fontSize: 18, color: '#9ca3af' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            flex: 1,
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#f9fafb',
              fontSize: '0.813rem',
              '& fieldset': {
                borderColor: '#e5e7eb',
              },
              '&:hover fieldset': {
                borderColor: '#d1d5db',
              },
            }
          }}
        />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ fontWeight: 600, color: '#1f2937', fontSize: '0.813rem' }}>
          تصفية حسب
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Select
            value={sortFilter}
            onChange={(e) => onSortChange(e.target.value)}
            size="small"
            displayEmpty
            startAdornment={<SortOutlined sx={{ fontSize: 14, mr: 0.5, color: '#6b7280' }} />}
            sx={{
              ...selectStyle,
              '& .MuiSelect-select': {
                py: 0.5,
                pr: 3
              }
            }}
          >
            <MenuItem value="درجة الخطر">درجة الخطر</MenuItem>
            <MenuItem value="الأحدث">الأحدث</MenuItem>
            <MenuItem value="الأقدم">الأقدم</MenuItem>
          </Select>
          <Select
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value)}
            size="small"
            sx={selectStyle}
          >
            <MenuItem value="الحالة">الحالة</MenuItem>
            <MenuItem value="مستقرة">مستقرة</MenuItem>
            <MenuItem value="قلق">قلق</MenuItem>
          </Select>
          <Select
            value={genderFilter}
            onChange={(e) => onGenderChange(e.target.value)}
            size="small"
            sx={selectStyle}
          >
            <MenuItem value="الجنس">الجنس</MenuItem>
            <MenuItem value="ذكر">ذكر</MenuItem>
            <MenuItem value="أنثى">أنثى</MenuItem>
          </Select>
          <ViewModeToggle viewMode={viewMode} onChange={onViewModeChange} />
        </Box>
      </Box>
    </Box>
  );
};

export default FiltersSection;