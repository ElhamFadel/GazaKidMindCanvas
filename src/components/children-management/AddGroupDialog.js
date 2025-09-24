import React, { useState } from 'react';
import {
  Box,
  Dialog,
  Typography,
  IconButton,
  Button,
  TextField
} from '@mui/material';
import { KeyboardArrowDown, Add } from '@mui/icons-material';
import ColorPicker from './ColorPicker';
import ChildrenSelector from './ChildrenSelector';

const AddGroupDialog = ({ open, onClose, childrenData }) => {
  const [newGroup, setNewGroup] = useState({
    name: '',
    color: '#ff9800',
    selectedChildren: []
  });

  const handleSubmit = () => {
    console.log('Creating group:', newGroup);
    onClose();
    // Reset form
    setNewGroup({
      name: '',
      color: '#ff9800',
      selectedChildren: []
    });
  };

  const toggleChildSelection = (childId) => {
    setNewGroup(prev => ({
      ...prev,
      selectedChildren: prev.selectedChildren.includes(childId)
        ? prev.selectedChildren.filter(id => id !== childId)
        : [...prev.selectedChildren, childId]
    }));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          p: 0
        }
      }}
    >
      <Box sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1f2937', flex: 1, textAlign: 'center' }}>
            إضافة مجموعة أطفال
          </Typography>
          <IconButton onClick={onClose} size="small">
            <KeyboardArrowDown sx={{ transform: 'rotate(90deg)' }} />
          </IconButton>
        </Box>

        <Typography variant="body2" sx={{ color: '#6b7280', textAlign: 'center', mb: 3, fontSize: '0.875rem' }}>
          أنشئ مجموعة جديدة لتصنيف الأطفال وتنظيم حسب<br />
          حالاتهم النفسية أو نوع الدعم الذي يتلقونه.
        </Typography>

        {/* Group Name */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ fontWeight: 600, color: '#374151', mb: 1, fontSize: '0.875rem' }}>
            اسم المجموعة
          </Typography>
          <TextField
            fullWidth
            placeholder="أدخل اسم المجموعة"
            value={newGroup.name}
            onChange={(e) => setNewGroup({...newGroup, name: e.target.value})}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f9fafb',
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

        {/* Group Color */}
        <ColorPicker
          selectedColor={newGroup.color}
          onColorSelect={(color) => setNewGroup({...newGroup, color})}
        />

        {/* Select Children */}
        <ChildrenSelector
          childrenData={childrenData}
          selectedChildren={newGroup.selectedChildren}
          onChildToggle={toggleChildSelection}
        />

        {/* Create Button */}
        <Button
          variant="contained"
          fullWidth
          startIcon={<Add />}
          onClick={handleSubmit}
          sx={{
            backgroundColor: '#3b82f6',
            textTransform: 'none',
            py: 1.5,
            fontSize: '0.875rem',
            fontWeight: 600,
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#2563eb',
              boxShadow: 'none',
            }
          }}
        >
          إنشاء المجموعة
        </Button>
      </Box>
    </Dialog>
  );
};

export default AddGroupDialog;