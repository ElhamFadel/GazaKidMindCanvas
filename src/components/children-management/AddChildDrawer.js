import React, { useState } from 'react';
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Button,
  Divider
} from '@mui/material';
import { Close, Add } from '@mui/icons-material';
import PersonalImageSection from './PersonalImageSection';
import ChildInfoForm from './ChildInfoForm';
import AdditionalInfoSection from './AdditionalInfoSection';

const AddChildDrawer = ({ open, onClose }) => {
  const [newChild, setNewChild] = useState({
    fullName: '',
    birthDate: '',
    gender: '',
    responsiblePerson: '',
    currentStatus: '',
    notes: ''
  });
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [expandedSection, setExpandedSection] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      setUploadedImage(file);
      setTimeout(() => {
        setIsUploading(false);
      }, 2000);
    }
  };

  const handleSubmit = () => {
    console.log('Adding child:', newChild);
    onClose();
    // Reset form
    setNewChild({
      fullName: '',
      birthDate: '',
      gender: '',
      responsiblePerson: '',
      currentStatus: '',
      notes: ''
    });
    setUploadedImage(null);
    setExpandedSection(false);
  };

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
            إضافة طفل جديد
          </Typography>
          <IconButton onClick={onClose} size="small">
            <Close />
          </IconButton>
        </Box>

        {/* Personal Image Section */}
        <PersonalImageSection 
          uploadedImage={uploadedImage}
          isUploading={isUploading}
          onImageUpload={handleImageUpload}
        />

        {/* Child Information Section */}
        <ChildInfoForm childData={newChild} onChange={setNewChild} />

        <Divider sx={{ my: 3 }} />

        {/* Additional Information Section */}
        <AdditionalInfoSection
          expanded={expandedSection}
          onToggle={() => setExpandedSection(!expandedSection)}
          notes={newChild.notes}
          onNotesChange={(notes) => setNewChild({...newChild, notes})}
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
            startIcon={<Add />}
            onClick={handleSubmit}
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
            إضافة الطفل
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default AddChildDrawer;