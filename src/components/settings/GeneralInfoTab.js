import React from 'react';
import {
  Box,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem
} from '@mui/material';
import LogoUploadSection from './LogoUploadSection';

const GeneralInfoTab = ({
  selectedLogo,
  institutionName,
  setInstitutionName,
  averageChildren,
  setAverageChildren,
  licenseNumber,
  setLicenseNumber,
  address,
  setAddress,
  contactNumber,
  setContactNumber,
  onLogoUpload,
  onLogoUpdate,
  onLogoDelete
}) => {
  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <LogoUploadSection
          selectedLogo={selectedLogo}
          onUpload={onLogoUpload}
          onUpdate={onLogoUpdate}
          onDelete={onLogoDelete}
        />

        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
            اسم المؤسسة
          </Typography>
          <TextField
            fullWidth
            value={institutionName}
            onChange={(e) => setInstitutionName(e.target.value)}
            placeholder="مثال: مركز الأمل للتأهيل النفسي"
          />
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
            متوسط عدد الأطفال
          </Typography>
          <FormControl fullWidth>
            <Select
              value={averageChildren}
              onChange={(e) => setAverageChildren(e.target.value)}
              displayEmpty
              placeholder="اختر متوسط عدد الأطفال ..."
            >
              <MenuItem value="" disabled>
                اختر متوسط عدد الأطفال ...
              </MenuItem>
              <MenuItem value="1-10">1-10</MenuItem>
              <MenuItem value="11-25">11-25</MenuItem>
              <MenuItem value="26-50">26-50</MenuItem>
              <MenuItem value="51-100">51-100</MenuItem>
              <MenuItem value="100+">أكثر من 100</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
            رقم الترخيص
          </Typography>
          <TextField
            fullWidth
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
            placeholder="اكتب عدد الأطفال في المؤسسة"
          />
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
            العنوان
          </Typography>
          <TextField
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="مثال: غزة - حي الرمال"
          />
        </Box>

        <Box>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 500 }}>
            رقم التواصل الرئيسي
          </Typography>
          <TextField
            fullWidth
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="0599 123 456"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GeneralInfoTab;